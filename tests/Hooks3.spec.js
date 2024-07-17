// Playeriht hooks

// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all tests have been run.
//beforeEach & afterEach: This hooks dont accept page fixtures, it accepts browser fixture.

import { test, expect } from '@playwright/test';

let page; // making page  a common variable;

test.beforeAll( async ({browser})=> {

    page = await browser.newPage(); 

    await page.goto('https://www.demoblaze.com/index.html');

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Mohonaa');
    await page.locator('#loginpassword').fill('123@moho');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();


});

// we are going to refering same page for every test so we don't need to need to re decaler the page or browser ficture every time

test.afterAll( async ()=> {

 //Logout

 await page.locator('#logout2').click();

});



test('Home page Test', async ()=> {

    //Home page
    await page.waitForTimeout(3000);
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9)

})

test('Add product to cart test', async ()=> { 

    //Add to Cart
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();
    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();

    // Dialog handling

    page.on('dialog', async dialog => {

        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })

});
