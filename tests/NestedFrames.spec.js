import {test, expect } from '@playwright/test';


test('Handel Nasted Frames', async ({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Locating frame 3 using frame object
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    frame3.locator("input[name='mytext3']").fill('Hello!!');

    //Nested Frame 
    //childFrames methods return all the child frames are available in the main frame
    const childFrames = await frame3.childFrames();
    //checking the radio button using xpath for the 0 indexed child frames
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check();


    await page. waitForTimeout(3000);

});