import {test, expect } from '@playwright/test';


test('Handel Frames', async ({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Finding total frames
    const frames = await page.frames();
    // console.log(frames.length);

    //Approch 1 - Using name or the url of the frame
    // const frameName = await page.frames('name'); // if  the name is pesent , we can use this 

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}); // using frame's url
    // await frame1.fill("[name='mytext1']", 'Hello'); // filling the form 


    //using frame locator 

    const frame1Inputbox =  await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    frame1Inputbox.fill('Hello!!!');


    await page. waitForTimeout(3000);

});