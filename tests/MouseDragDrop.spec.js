import {test, expect } from '@playwright/test';

test('Mouse Drag and Drop', async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    //locating source and  target elements 
    const source  = await page.locator('#box6');
    const target = await page.locator('#box106');

    const source2 = await page.locator('#box3');
    const target2 = await page.locator('#box103');

    //Approch - 1 - using hover method 
    await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();

    //Approch - 2 - using dragTo method 
    await source2.dragTo(target2);

    
    await page.waitForTimeout(5000);

});