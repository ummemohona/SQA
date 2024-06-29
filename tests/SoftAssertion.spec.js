import {test, expect } from '@playwright/test'; 

test('Soft-Assertion', async ({page})=> {

    await page.goto('https://www.demoblaze.com/');

    //Hard-Assertions 
    // await expect(page).toHaveTitle('STOREee');
    // await expect(page).toHaveURL('https://www.demoblaze.com');
    // await expect(page.locator('.navbar-brand')).toBeVisible();


    //Soft Assertions
    await expect.soft(page).toHaveTitle('STOREee');
    await expect(page).toHaveURL('https://www.demoblaze.com');
    await expect(page.locator('.navbar-brand')).toBeVisible();

})