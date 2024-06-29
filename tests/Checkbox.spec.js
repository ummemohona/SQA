import {test, expect } from '@playwright/test';


test('CheckBox Handel', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');


    //single checkbox
    await page.locator('//*[@id="wednesday" and @type="checkbox"]').check();
    await expect(page.locator('//*[@id="wednesday" and @type="checkbox"]')).toBeChecked();
    await expect(page.locator('//*[@id="wednesday" and @type="checkbox"]').isChecked()).toBeTruthy();

    //Multiple Checkboxes

    const checkboxes = [
        '//*[@id="wednesday" and @type="checkbox"]',
        '//*[@id="tuesday" and @type="checkbox"]',
        '//*[@id="thursday" and @type="checkbox"]'
    ];

    for (const locator of checkboxes) { // select checkboxes

        await page.locator(locator).check();

    }

    for (const locator of checkboxes) { // unselect checkboxes

        if (await page.locator(locator).isChecked()) {
            
            await page.locator(locator).uncheck();

        }

    }




    await page.waitForTimeout(5000); //Pausing Code from executing for 5 seconds
})