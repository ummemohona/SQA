import {test, expect} from '@playwright/test';

test('BuiltInLocators', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //****** Built-In Locators ********** 
    
    // page.getByAltText() to locate an element , usually image , by its text alternative 

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    // page.getByPlaceholder() to locate an input by placeholder.

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // page.getByRole() to locate by explicit and implicit accessibility attributes.

    await page.getByRole('button',{type: 'submit'}).click();

    // page.getByText() to locate by text content

    await page.waitForSelector('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p');
    const name = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p').textContent();
    console.log(name);
    await expect(await page.getByText(name)).toBeVisible();

    // page.getByLabel() to Locate a form control by associated label’s text
    // page.getByTitle() to locate an element by its title attribute
    // page.getByTestId() to locate an element based on its data-testid attribute

    await page.close();

})