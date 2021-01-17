const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
    headless: true,
    userDataDir: '/app/data'
  });
  const page = await browser.newPage()
  await page.goto('https://party.pl/newsy/poznajcie-finalistki-konkursu-miss-polski-2020-ktora-z-tych-pieknosci-powinna-wygrac-glosujcie-w-naszym-plebiscycie-905-r28/')
  setInterval(async () => {
    await page.$eval('#photo2 > figure > div', el => el.click())
    // setTimeout(async () => {
    //   await page.close()
    // }, 2000)
  }, 2000)
  // await browser.close();
})();
