import {test, expect } from '@playwright/test';

test.skip('Upload Single Files', async ({page})=>{

    await page.goto('https://tus.io/demo');

    // locating the "upload resume" button 
    await page.waitForSelector('#P0-0');
    await page.locator('#P0-0').click();

    //Uploading file
    await page.locator('#P0-0').setInputFiles('tests/Files/file1.pdf')


    
    await page.waitForTimeout(5000);

});


test('Upload Multiple Files', async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    //Get the element
    await page.locator('#filesToUpload').setInputFiles([
        'tests/Files/file1.pdf',
        'tests/Files/file2.pdf'
    ])

    await page.waitForTimeout(3000);

    //checking if all files are uploaded.

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('file1.pdf');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('file2.pdf');

    await page.waitForTimeout(3000);

    //removing files
    await page.locator('#filesToUpload').setInputFiles([]);

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);


});