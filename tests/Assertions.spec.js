import{test,expect} from '@playwright/test'

test('Assertion', async ({page})=> {

    await page.goto('https://demo.nopcommerce.com/register');

    // expect(page).toHaveURL() - page has URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // expect(page).toHaveTitle() - page has title

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // expect(locator).toBeVisible() - Element is visible

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // expect(locator).toBeEnabled() && expect(locator).toBeDisabled() - Element is enable or disable
    
    const searchBox = await page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();

    // expect(locator).toBeChecked() - Radio/Checkbox is checked

    const maleRadiobutton = await page.locator('#gender-male');
    await maleRadiobutton.click(); // select radio button
    await expect(maleRadiobutton).toBeChecked();

    //checkbox
    const newsletter = await page.locator('#Newsletter');
    await expect(newsletter).toBeChecked();


    // expect(locator).toHaveAttribute() - element has atribute 

    const regBtn = await page.locator('#register-button');
    await expect(regBtn).toHaveAttribute('type','submit');

    // expect(locator).toHaveText() - element matches text

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    // expect(locator).toContainText() - element contain text

    await expect(await page.locator('.page-title h1')).toContainText('Register');

    // expect(locator).toHaveCount() - List of element has given length 

    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);

    // expect(locator).toHaveValue(Value) - Input has Value

    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');


})