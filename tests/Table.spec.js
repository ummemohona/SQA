import {test, expect} from '@playwright/test';

test('Handle Table', async ({page})=> {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Capture the table
    const table = await page.locator('#productTable');

    //finding total number of column and row in table
    const columns  =  await table.locator('thead tr th');
    console.log(' columns', await columns.count());

    const rows = await table.locator('tbody tr');
    console.log(' rows', await rows.count());

    //Applying some assertions
    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // // Select particular product(product 4) from the table 
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),// filter the elements which contain td tag 
    //     hasText: 'Product 4' // filter the elements which td tag contain that particular text
    // })

    // matchedRow.locator('input').check(); // checking the input box for product 4

    // Selecting Multiple Products by creating resuable function
    // await selectProduct(rows, page, 'Product 1');
    // await selectProduct(rows, page, 'Product 3');
    // await selectProduct(rows, page, 'Product 4');

    //Print all product details from the table from first page
    // for(let i = 0; i < await rows.count(); i++) { // incrimenting the rows

    //     const row = rows.nth(i); // captueing the nth - i row - current row
    //     const tds = row.locator('td');
    //     for(let j = 0; j < await columns.count()-1; j++) { //incrementing the column & we don't need the last column because it is a select boxs column

    //         console.log(await tds.nth(j).textContent());

    //     }

    // } 

    // Reading data from multiple pages - pagination 

    const numberOfPages = await page.locator('.pagination li a');
    console.log("Number of pages: " , await numberOfPages.count());

    for(let p= 0 ; p < await numberOfPages.count() ; p++) { // loop through pages

        if(p > 0) { // check if it is in the first page of the table 

            await numberOfPages.nth(p).click();// if it is not the first page then we need to click on the page number from the pagination
        }

        for(let i = 0; i < await rows.count(); i++) { // incrimenting the rows

            const row = rows.nth(i); // captueing the nth - i row - current row
            const tds = row.locator('td');
            for(let j = 0; j < await columns.count()-1; j++) { //incrementing the column & we don't need the last column because it is a select boxs column
    
                console.log(await tds.nth(j).textContent());
    
            }
    
        } 
        await page.waitForTimeout(3000);
    }


    await page.waitForTimeout(5000);

})

//creating function for select product from the table 

async function selectProduct( rows, page, name) {

    const machedRow = rows.filter({
        has: page.locator('td'),// filter the elements which contain td tag 
        hasText: name // filter the elements which td tag contain that particular text
    })
    await machedRow.locator('input').check(); // checking the input box for product 

}