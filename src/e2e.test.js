const puppeteer = require('puppeteer');

describe('App Title', () => {
    test('App Title loads correctly', async () => {
      let browser = await puppeteer.launch({
        headless: false
      });
      let page = await browser.newPage();
  
      page.emulate({
        viewport: {
        width: 500,
        height: 2400
        },
        userAgent: ''
      });
  
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('body');
  
      const pageTitle = await page.title();
      expect(pageTitle).toBe('Responsive Image Carousel');
  
      browser.close();
    }, 16000);
});

describe('Loads 3 carousels', () => {
  test('Loads carousels correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
      width: 500,
      height: 2400
      },
      userAgent: ''
    });
    await page.goto('http://localhost:3000/', {waitNetworkIdle: true});
    await page.waitForSelector('.cards-slider');
    let carousels = await page.$$('.cards-slider');
    expect(carousels.length).toBe(3);

    browser.close();
  }, 16000);
});


describe('Responsive check', () => {
  test('Image widths 100% below 600px viewport', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
      width: 500,
      height: 2400
      },
      userAgent: ''
    });
    await page.goto('http://localhost:3000/', {waitNetworkIdle: true});
    await page.waitForSelector('.cards-slider');

    await page.evaluate(() => {
      let elements = document.getElementsByClassName('showGoals');
      for (let element of elements)
          element.click();
  });

    const imagesize = await page.evaluate(() => {
      return document.querySelector('.cards-slider:nth-of-type(1) img').offsetWidth;
    });
    expect(imagesize).toBe(480);

    browser.close();
  }, 16000);
});