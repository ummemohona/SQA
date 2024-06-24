import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Mohonaa');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('123@moho');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('img', { name: 'First slide' }).click();
  await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
  await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});