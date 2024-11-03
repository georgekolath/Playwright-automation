import { test, expect } from '@playwright/test'
import { log } from 'console';
import exp from 'constants';
import Data from './data.json'

test.use({
    locale: 'pt-IN',
    headless: false

});

test.beforeEach(async ({page}) => {
    global.page = page
});

test.afterEach( async ({page}) => {
    await page.close();
});

test('Validate that the user is able to open the amazon page', async () => {
  
    await test.step('Navigate to the amazon landing page', async () => {
        await page.goto('https://www.amazon.in/');
    })

    await test.step('Verifying the main screen', async () => {
        const currentUrl = page.url();
        expect(currentUrl).toBe('https://www.amazon.in/');
    })

    await test.step('Verify the main screen of the amazon', async () => {
        await page.waitForSelector('#nav-logo-sprites');
        const logoElement = page.locator('#nav-logo-sprites');
        const searchInput = page.locator('#twotabsearchtextbox');
        const searchButton = page.locator('#nav-search-submit-button');
        
    
        await expect(logoElement).toBeVisible();
        await expect(searchInput).toBeVisible();
        await expect(searchButton).toBeVisible();
});

    await test.step('Verify that the user is able to search for an iten', async () => {
        const searchbox = page.locator('#twotabsearchtextbox');
        const submit = page.locator('#nav-search-submit-button');
        await searchbox.fill(Data.search2);
        await submit.click();
    })

    await test.step('Verify that the user is able to login', async () => {
        const login = page.locator('#nav-link-accountList-nav-line-1')

        //await login.waitForSelector();
        await login.click();
    })


});

