// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานทำการค้นหาคำว่าหวย แล้วต้องเจอคำว่าผลการค้นหา', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  const seachField = await page.locator('#APjFqb');
  await seachField.fill('หวย');
  await seachField.press('Enter');
  //await expect(page).toHaveTitle(/Playwright/);
   expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหา/);
});


