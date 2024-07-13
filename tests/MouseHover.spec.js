import {test, expect } from '@playwright/test';

test('Mouse Hover', async ({page})=>{

    await page.goto('https://www.w3schools.com/');

    //getting the desktops menu 
    const html = await page.locator('//*[@id="subtopnav"]/a[1]');
    const css = await page.locator('//*[@id="subtopnav"]/a[2]');



    // mouse hover
    await html.hover();
    await css.hover();

    await page.waitForTimeout(5000);

});