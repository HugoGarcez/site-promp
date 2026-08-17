<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
      <head>
        <title>Sitemap XML — Promp</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #090d16;
            color: #f1f5f9;
            padding: 40px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 32px;
            backdrop-filter: blur(12px);
          }
          .logo-area {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
          }
          .logo-title {
            font-family: 'Comfortaa', cursive, sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #38bdf8;
            letter-spacing: -0.5px;
          }
          .badge {
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
          }
          .desc {
            color: #94a3b8;
            font-size: 14px;
            margin-bottom: 20px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          .stat-card {
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 16px;
            border-radius: 12px;
          }
          .stat-value {
            font-size: 22px;
            font-weight: 700;
            color: #f8fafc;
          }
          .stat-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 4px;
          }
          .table-container {
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          thead {
            background: rgba(30, 41, 59, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          th {
            padding: 16px 20px;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: background-color 0.15s ease;
          }
          tbody tr:hover {
            background: rgba(56, 189, 248, 0.05);
          }
          td {
            padding: 16px 20px;
            vertical-align: middle;
          }
          .url-link {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            word-break: break-all;
          }
          .url-link:hover {
            text-decoration: underline;
            color: #7dd3fc;
          }
          .priority-pill {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 12px;
          }
          .p-high {
            background: rgba(34, 197, 94, 0.15);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }
          .p-med {
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
          }
          .p-low {
            background: rgba(148, 163, 184, 0.15);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }
          .freq-tag {
            color: #cbd5e1;
            font-size: 12px;
          }
          .lang-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            max-width: 340px;
          }
          .lang-badge {
            background: rgba(255, 255, 255, 0.06);
            color: #94a3b8;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
            font-family: monospace;
          }
          .footer {
            margin-top: 32px;
            text-align: center;
            color: #64748b;
            font-size: 12px;
          }
          .footer a {
            color: #38bdf8;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-area">
              <span class="logo-title">promp</span>
              <span class="badge">Sitemap XML Oficial</span>
            </div>
            <p class="desc">
              Este sitemap indexa todas as páginas canônicas, landings de soluções, especificações multilíngues (hreflang) e dados estruturados para motores de busca (Google, Bing) e crawlers de IA (ChatGPT, Claude, Perplexity, Gemini).
            </p>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="stat-label">Total de Páginas Canônicas</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">9 Idiomas</div>
                <div class="stat-label">Suporte Hreflang</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">100% Válido</div>
                <div class="stat-label">Protocolo Sitemaps.org</div>
              </div>
            </div>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th style="width: 40%;">URL Canônica</th>
                  <th style="width: 10%;">Prioridade</th>
                  <th style="width: 12%;">Frequência</th>
                  <th style="width: 18%;">Última Modificação</th>
                  <th style="width: 20%;">Idiomas (Hreflang)</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="url-link">
                        <xsl:attribute name="href">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:attribute>
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.9">
                          <span class="priority-pill p-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority &gt;= 0.7">
                          <span class="priority-pill p-med"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-pill p-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <span class="freq-tag"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                    <td style="color: #94a3b8; font-family: monospace; font-size: 11px;">
                      <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                    </td>
                    <td>
                      <div class="lang-badges">
                        <xsl:for-each select="xhtml:link[@rel='alternate']">
                          <span class="lang-badge"><xsl:value-of select="@hreflang"/></span>
                        </xsl:for-each>
                      </div>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Promp Tecnologia LTDA — Plataforma de IA para Vendas e Atendimento • <a href="/llms.txt">Índice LLMs</a> • <a href="/robots.txt">Robots.txt</a></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
