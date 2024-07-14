import {test, expect } from '@playwright/test';

test('Keyboard actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    //locating the textarea and puting input
    await page.locator('//*[@id="diff"]/form/div[1]/div[1]/textarea').fill('Helloo!!');
    // await page.type('name="text1"', 'Helloo!!');

    //ctrl + A
    await page.keyboard.press('Control+A');

    //ctrl + C
    await page.keyboard.press('Control+C');


    // Tab
    await page.keyboard.down('Tab');// press action
    await page.keyboard.up('Tab');// release action



    //ctrl + V
    await page.keyboard.press('Control+V');

    
    await page.waitForTimeout(5000);

});