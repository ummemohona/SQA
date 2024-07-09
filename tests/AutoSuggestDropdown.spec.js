import {test, expect } from '@playwright/test';

test('Auto suggest Dropdown', async ({page})=>{

    await page.goto('https://www.redbus.in/');


    //Locating the input box 
    await page.locator('#src').fill('Delhi');

    //Waiting for the locator
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    // Capturing the options in the options array
    const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    for (let option of options) {

        const value = await option.textContent();
        // console.log(value);

        if(value.includes('Delhi Airport')) {

            await option.click();
            break;
        }

    }

    await page.waitForTimeout(3000);


})