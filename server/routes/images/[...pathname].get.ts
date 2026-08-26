import { createReadStream, existsSync, statSync } from 'node:fs';
import { resolve, normalize } from 'node:path';
import { getRouterParam, setResponseHeader, sendStream, createError } from 'h3';

const MIME_MAP: Record<string, string> = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif'
};

export default defineEventHandler((event) => {
  const rawPathname = getRouterParam(event, 'pathname') || '';
  // Previne directory traversal
  const pathname = normalize(rawPathname).replace(/^(\.\.[\/\\])+/, '');

  const possibleBaseDirs = [
    resolve(process.cwd(), 'public/images'),
    resolve(process.cwd(), '.output/public/images'),
    '/var/www/site-promp/public/images',
    '/var/www/site-promp/.output/public/images'
  ];

  for (const baseDir of possibleBaseDirs) {
    const fullPath = resolve(baseDir, pathname);
    if (existsSync(fullPath) && statSync(fullPath).isFile()) {
      const ext = fullPath.substring(fullPath.lastIndexOf('.')).toLowerCase();
      const mime = MIME_MAP[ext] || 'application/octet-stream';

      setResponseHeader(event, 'Content-Type', mime);
      setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
      return sendStream(event, createReadStream(fullPath));
    }
  }

  throw createError({
    statusCode: 404,
    statusMessage: `Image not found: ${pathname}`
  });
});
