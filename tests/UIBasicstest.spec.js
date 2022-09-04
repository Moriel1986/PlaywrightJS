const {test, chromium, expect} = require('@playwright/test');


test('Page Playwright test', async ({page})=>
{
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Click a:has-text("Log in")
  await page.locator('a:has-text("Log in")').click();
  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.locator('text=Log in Username: Password: Close Log in >> input[type="text"]').click();
  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.locator('text=Log in Username: Password: Close Log in >> input[type="text"]').fill('Moriel1986');
  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.locator('text=Log in Username: Password: Close Log in >> input[type="password"]').click();
  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.locator('text=Log in Username: Password: Close Log in >> input[type="password"]').fill('Kobegoat#0824');
  // Click button:has-text("Log in")
  await page.locator('button:has-text("Log in")').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/');
  // Click text=Laptops
  await page.locator('text=Laptops').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
  // Click a:has-text("MacBook Pro")
  await page.locator('a:has-text("MacBook Pro")').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=15');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('text=Add to cart').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=15#');
  // Click text=Home (current)
  await page.locator('text=Home (current)').click();
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); 
});






