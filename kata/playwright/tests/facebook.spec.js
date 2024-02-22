// @ts-check
const { test, expect } = require('@playwright/test');







test('ผู้ใช้Facebook เข้าสู่ระบบ แล้้วทำการ post Hello playwright สำเร็จ', async ({ page }) => {

  // Step 1 :: go to facebook.
  await test.step('Step 1 :: go to facebook', async () => {
    await page.goto('https://www.facebook.com/');
  });

  // Step 2 :: Login.
  await test.step('Step 2 :: Login by phone', async () => {
    await page.getByTestId('royal_email').fill('00');
    await page.getByTestId('royal_pass').click();
    await page.getByTestId('royal_pass').fill('00');
    await page.getByTestId('royal_pass').press('Enter');
    
  });
  
  // Step 2 :: Post Hello playwright
  await test.step('Step 3 :: Post Hello playwright', async () => {
    // Assert "ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)"
    // Step 3 :: Assert text in id=result-stats
    await page.getByRole('link', { name: 'Facebook' }).click();
    await page.getByRole('button', { name: 'คุณคิดอะไรอยู่ Kop' }).click();
    await page.getByLabel('คุณคิดอะไรอยู่ Kop').fill('Hello playwright');
    await page.getByLabel('โพสต์', { exact: true }).click();

  });




});