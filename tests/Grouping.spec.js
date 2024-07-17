import { test, expect } from '@playwright/test';

//Adding Hooks

test.beforeAll(async ()=>{
    console.log('this is before all hook');
})

test.afterAll(async ()=>{
    console.log('this is after all hook');
})

test.beforeEach(async ()=>{
    console.log('this is before each hook');
})

test.afterEach(async ()=>{
    console.log('this is after each hook');
})


//Group - using Discribe block
//"only" will execute this test group only

test.describe.only('Group1', () => {

    test('test1', async ({ page }) => {

        console.log('this is test1');
    })

    test('test2', async ({ page }) => {

        console.log('this is test2');
    })

});


test.describe('Group2', () => {

    test('test3', async ({ page }) => {

        console.log('this is test3');
    })

    test('test4', async ({ page }) => {

        console.log('this is test4');
    })

});