import {test, expect } from '@playwright/test';

test('Mouse Right Click', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //getting the button "Right click me"
    const button  = await page.locator('//span[normalize-space()="right click me"]');

    //right click action
    await button.click({button: 'right'});



    await page.waitForTimeout(5000);

});