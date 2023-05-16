import { expect, test } from '@playwright/test';
import BasePage from '../E2E-TESTS/common/BasePage';
import HomePage from '../E2E-TESTS/components/HomePage';
import LogIn from '../E2E-TESTS/components/LogInFillForm';
import { createLogInFields } from '../E2E-TESTS/utils/logInForm';



test('DemoBlaze Log In test', async ({ page }) => {
    const buildTest = new BasePage(page);
    await buildTest.NavtoApp();
    const DBHomePage = new HomePage(page);
    await DBHomePage.expectDemoBlazeLaunch();
    const logInForm = createLogInFields();
    const login = new LogIn(page);
    await DBHomePage.navigateToLogIn();
    await login.fillLogInForm(logInForm);
    await login.clicksLoginButton();
    await DBHomePage.expectLogIn();
    await DBHomePage.navigateToHome();
    await DBHomePage.clicklogOut();
    await buildTest.closeApp();


});