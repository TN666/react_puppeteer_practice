/* eslint-disable no-undef */

beforeAll(async () => { await page.goto(URL); }); 

describe('Button Test', () => { 

  test('25% button', async () => {
    await testButton(25)
  });

  test('50% button', async () => {
    await testButton(50)
  });

  test('75% button', async () => {
    await testButton(75)
  });

  test('100% button', async () => {
    await testButton(100)
  });

  test('reset button', async () => {
    await testButton(0)
  });

  test('delayed button', async () => {
    await page.click('#delay-100');
    await page.waitForFunction(() => document.querySelector('.progress-bar').textContent === '100%');
  },10000);

});

async function testButton(p) {
  await page.click(`#button-${p}`);
  const bar = await page.$('div[id="progress-bar"]');
  const percentage = await (await bar.getProperty('textContent')).jsonValue();
  expect(percentage).toBe(`${p}%`);
}