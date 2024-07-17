import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot({path:'tests/SS/'+Date.now()+'Homepage.png'});
})

test('Full page Screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot({path:'tests/SS/'+Date.now()+'Fullpage.png', fullPage: true});
});

test.only('Element Screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    //login 
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Mohonaa');
    await page.locator('#loginpassword').fill('123@moho');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();

    await page.waitForTimeout(3000);
    await page.locator('//*[@id="tbodyid"]/div[1]/div/a/img').screenshot({path:'tests/SS/'+Date.now()+'samsung.png', fullPage: true});
    
})