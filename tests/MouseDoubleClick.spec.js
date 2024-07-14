import {test, expect } from '@playwright/test';

test('Mouse Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //getting the button "Right click me"
    const btnCopy  = await page.locator('//*[@id="HTML10"]/div[1]/button');

    //double click action
    await btnCopy.dblclick();

    //verifying the text after double click action
    const f2 = await page.locator('#field2');

    await expect(f2).toHaveValue('Hello World!');



    await page.waitForTimeout(5000);

});