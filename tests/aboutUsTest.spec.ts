import { test } from '@playwright/test';
import BasePage from '../E2E-TESTS/common/BasePage';
import HomePage from '../E2E-TESTS/components/HomePage';



test('DemoBlaze About Us test', async ({ page }) => {
    const buildTest = new BasePage(page);
    await buildTest.NavtoApp();
    const DBHomePage = new HomePage(page);
    await DBHomePage.navigateToAboutUs();
    await DBHomePage.expectAboutUs
    await DBHomePage.closeApp();

});

  
  
  