import{test, expect} from '@playwright/test';

test('MultiSelect Dropdown Handle', async ({page})=> {

    //lanching the page

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue', 'Green', 'Yellow']);

    //Assertions 
    //1. check number of options in multi select dropdown
    // const options =  await page.locator('#colors option');
    // await expect(options).toHaveCount(5);

    // 2.  check number of options in multi select dropdown using JS array 
    // const options = await page.$$('#colors option');
    // await expect(options.length).toBe(5);

    //3. check the presence of the value in  the multi select dropdown

    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();





    await page.waitForTimeout(5000);
});