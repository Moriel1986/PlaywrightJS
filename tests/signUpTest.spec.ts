import { expect, test } from '@playwright/test';
import BasePage from '../E2E-TESTS/common/BasePage';
import HomePage from '../E2E-TESTS/components/HomePage';
import SignUp from '../E2E-TESTS/components/SignUpFillForm';
import { createNewSignUpFields } from '../E2E-TESTS/utils/signUpForm';



test('DemoBlaze Sign Up test', async ({ page }) => {
    const buildTest = new BasePage(page);
    await buildTest.NavtoApp();
    const DBHomePage = new HomePage(page);
    await DBHomePage.expectDemoBlazeLaunch();
    const signUpForm = createNewSignUpFields();
    const signUp = new SignUp(page);
    await DBHomePage.navigateToSignUp();
    await signUp.fillSignUpForm(signUpForm);
    await signUp.clicksignUpButton();
    await DBHomePage.expectSignUp();
    await buildTest.closeApp();


});