import {test, expect} from '@playwright/test';

test('LocateMultipleElements', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //**************** Locate multiple web elements ****************

    // const links = await page.$$('a');

    // for(const link of links) {

        // textContent() menthod will return the text of the links
    //     const linkText = await link.textContent();
    //     console.log(linkText);
    // }
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products =  await page.$$("//div[@id='tbodyid']//h4/a");
    console.log(products)

    for(const product of products) {

        const productName = await product.textContent();
        console.log(productName);
    }

    await page.close();

})