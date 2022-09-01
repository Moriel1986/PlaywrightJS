const {test, chromium, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/")

});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("STORE");
    await page.locator("//*[contains(text(),'Laptops')]").click();
    await page.locator("//a[@class='hrefch'][contains(text(),'MacBook Pro')]").click();
    await expect(page.locator('//a[@class="hrefch"][contains(text(),"MacBook Pro")]')).toHaveText('MacBook Pro');


    
});