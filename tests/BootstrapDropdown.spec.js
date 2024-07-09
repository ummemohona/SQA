import {test, expect} from '@playwright/test';

test('Bootstrap Dropdown', async({page})=>{

    await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/');

    //locating the dropdown
    await page.locator('.multiselect').click();

    //Options 1 - Stroring the options from the dropdown
    // const options = await page.locator('ul>li label input');
    // await expect(options).toHaveCount(7);

    //Options 2 - Stroring the options from the dropdown into an array 
    // const options = await page.$$('ul>li label input');
    // await expect(options.length).toBe(7);

    // Selecting Multiple Options from the dropdown
    // const options = await page.$$('ul>li label ');

    // for(let option of options){

    //     //getting the value of the option
    //     const value = await option.textContent();
    //     // console.log(value);
    //     if(value.includes('Java') || value.includes('SQL') || value.includes('.Net')){

    //         await option.click();
    //     }
    // }

    //Unselect option
    const options = await page.$$('ul>li label ');

    for(let option of options){

        //getting the value of the option
        const value = await option.textContent();
        // console.log(value);
        if(value.includes('JavaScript')){

            await option.click();
        }
    }




    await page.waitForTimeout(5000);
})