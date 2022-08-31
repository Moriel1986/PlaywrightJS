const {test, chromium, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/")
});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://www.google.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});