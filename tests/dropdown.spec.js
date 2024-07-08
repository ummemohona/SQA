import{test, expect} from '@playwright/test';

test('Dropdown Handle', async ({page})=> {

    //lanching the page

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select option from the dropdown
    //option 1 
    // await page.locator('#country').selectOption({label:'Japan'}); //label/ visible text

    //option 2
    // await page.locator('#country').selectOption('Japan'); // visible text

    //option 3
    // await page.locator('#country').selectOption({value:'france'}); //using value

    //option 4
    // await page.locator('#country').selectOption({index:1}); //using index

    //option 5
    // await page.selectOption("#country","France"); //directly using select option

    //Assertions for dropdown
    //option 1 - check the number of options available in the dropdown
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // option 2 - check the number of options available in the dropdown -in array format

    // const options =  await page.$$('#country option');
    // console.log(options.length );
    // await expect(options.length).toBe(10);
    

    // Check presence of value in the dropdown
    //Option 1 - Locating the whole content of the dropdown using Id attribute
    // const content = await page.locator('#country').textContent(); //return string value
    // await expect(content.includes('India')).toBeTruthy();

    //option 2 - using loop to check presence of value in the dropdown
    //capture all values in a variable 
    // const options =  await page.$$('#country option');
    // let status = false;
    // for (const option of options){
    //     let value = await option.textContent();
    //     if(value.includes('France')){
    //         status = true;
    //         break;
    //     }
    // }

    // expect(status).toBeTruthy();

    //Select option from dropdown using loop 

    const options =  await page.$$('#country option');

    for (const option of options){
        let value = await option.textContent();

        if(value.includes('France')){
            await page.selectOption('#country', value);
            break;
        }
    }


    await page.waitForTimeout(5000);

})
