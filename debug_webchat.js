const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  const hasWidget = await page.evaluate(() => {
    return !!document.getElementById('channel-chat-widget');
  });

  console.log('Has widget in DOM?', hasWidget);

  await browser.close();
})();
