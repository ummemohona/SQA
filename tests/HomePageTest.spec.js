//importing the packages from the playwright/test 
//"expect" packge is required for add validation to tests
//"test" is required to create tests

const {test, expect} = require('@playwright/test')

//creating tests
//In test block we need to pass perameters one is the title of the test and another is an anonymous function
//In the anonymous function will use some fixtures that provided by playwright
//In playwright  whenever we automatating any application, the page will be represented with the fixture
//This "page" Fixture contains so many command of that page 
//"async" should be specified -  async makes the function return a promise
//"await" makes the  function wait for the promise

test('Home page', async({page})=> {

    //this "goto('URL')" method is used to navigate to the url specified
    await page.goto('https://www.demoblaze.com/');

    //this "title()" method is used to get the title of the page
    //this "url()" method is used to  get the url of the page
    const pageTitle = await page.title();
    const URL = await page.url();
    console.log(pageTitle, URL);

    // applying validation
    //"toHaveTitle('expected title')" method is used to check if the title is correct 
    //"toHaveUrl('expected url')" method is used to check if the url is correct 
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    //"close()" method is used to close the page
    await page.close();
})

