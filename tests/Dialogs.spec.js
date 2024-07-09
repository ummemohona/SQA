import {test, expect} from '@playwright/test';

// .skip will skip the test from executing

test.skip("Alert with OK", async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // By default dialogs are auto dismissed by playwright.
    //We can register the dialog handler before the action triggers the dialog to either dialog.accept() or dialog.dismiss()

    //Alert with Ok button
    //Enabling dialog handler

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');

        // automatically dismiss the dialog
        await dialog.accept(); 
    })

    await page.click('//*[@id="HTML9"]/div[1]/button[1]');
    
    await page.waitForTimeout(5000);
})

test.skip("Confirmation Dialog", async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Alert with Ok and cencel button
    //Enabling dialog handler

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');

        // automatically dismiss the dialog
        await dialog.accept();// close the dialog using the ok button
        // await dialog.dismiss();// close by using cancel button
    })

    await page.click('//*[@id="HTML9"]/div[1]/button[2]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    
    await page.waitForTimeout(5000);
})


test("Prompt Dialog", async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Prompt Alert 
    //Enabling dialog handler

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        // automatically dismiss the dialog
        await dialog.accept("Mohona");
    })

    await page.click('//*[@id="HTML9"]/div[1]/button[3]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Mohona! How are you today?');
    
    await page.waitForTimeout(5000);
})