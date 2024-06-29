import {test, expect } from '@playwright/test';


test('InputBox Handel', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // inputbox - Name 
    await expect(await page.locator('//*[@id="name"]')).toBeVisible();
    await expect(await page.locator('//*[@id="name"]')).toBeEmpty();
    await expect(await page.locator('//*[@id="name"]')).toBeEditable();
    await expect(await page.locator('//*[@id="name"]')).toBeEnabled();

    // await page.fill('//*[@id="name"]', 'Mohona');
    await page.locator('//*[@id="name"]').fill('Mohona');

    //RadioButton
    await page.locator('//*[@id="female"]').check();
    // await page.check('//*[@id="female"]');
    // await expect(await page.locator('//*[@id="female"]').check()).toBeChecked();
    await expect(await page.locator('//*[@id="female"]').isChecked()).toBeTruthy();
    await expect(await page.locator('//*[@id="male"]').isChecked()).toBeFalsy();


    await page.waitForTimeout(5000); //Pausing Code from executing for 5 seconds
})