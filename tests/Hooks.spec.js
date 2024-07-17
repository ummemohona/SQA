// Playeriht hooks

// beforeEach: This hook is executed before each individual test.
// afterEach: This hook is executed after each individual test.

// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all tests have been run.


import { test, expect } from '@playwright/test';

test('Home page Test', async ({page})=> {

    await page.goto('https://www.demoblaze.com/index.html');

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Mohonaa');
    await page.locator('#loginpassword').fill('123@moho');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();



    //Home page
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9)

    //Logout

    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);

})

test('Add product to cart test', async ({page})=> { 


    await page.goto('https://www.demoblaze.com/index.html');

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Mohonaa');
    await page.locator('#loginpassword').fill('123@moho');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();



    //Add to Cart
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();
    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();

    // Dialog handling

    page.on('dialog', async dialog => {

        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })

    //Logout

    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);
});
