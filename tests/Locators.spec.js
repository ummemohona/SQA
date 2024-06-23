// const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    // *********** Locating elements - Link & Buttons **************
    //Approach 01 -  await page.locator('attribute/CSS/Xpath').click() this is the method for locating any element
    //locating the login button - property 

    // await page.locator('id=login2').click();

    //Approach 02 - await page.click('locator) - better for button/ links

    await page.click('id=login2');

    // After clicking the login button a from should appear, and need to provide username and password
    // Providing a username and password by using Css properties
    // fill("")/ type(); method user for proving input

    //  await page.locator('#loginusername').fill('Mohona');

    await page.fill('#loginusername', 'Mohonaa'); // Using Css properties
    await page.fill("input[id='loginpassword']", '123@moho'); // using attribute

    //Clicking on the login button 

    await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]");

    //Verifying Logout Link's presence
    // just Locating the element 
    const logout_link = await page.locator('#logout2');
    
    await expect(logout_link).toBeVisible();

    await page.close();


})