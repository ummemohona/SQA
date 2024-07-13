import {test, expect} from '@playwright/test';

test('Date Picker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // picking a date using fill method
    await page.fill('#datepicker','09/17/2024');

    //method 2- step by step date picker- defining year, month, day

    const year = '2024';
    const month = 'September';
    const day = '19';

    await page.click('#datepicker'); // open date picker

    while(true) {
        
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentyearMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentyearMonth == month && currentyear == year) {
            
            break;
        }
        await page.locator('[title="Next"]').click(); // if current year and month don't match then move on to the next
        // await page.locator('[title="Prev"]').click();// for backward 
    
    }

    const dates = await page.$$('.ui-state-default');

    //selectin date using loops
  
    // for (const dt of dates) {

    //     if(await dt.textContent()== day){

    //         await dt.click();
    //         break;
    //     }
    // }

    //Second approch- without loop , using xpath

    await page.click(`//a[@class='ui-state-default'][text()='${day}']`);


    await page.waitForTimeout(5000);
})
