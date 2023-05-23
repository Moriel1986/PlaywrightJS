import { expect, test } from '@playwright/test';
import BasePage from '../E2E-TESTS/common/BasePage';
import HomePage from '../E2E-TESTS/components/HomePage';
import LogIn from '../E2E-TESTS/components/LogInFillForm';
import PlaceOrder from '../E2E-TESTS/components/PlaceOrderFillForm';
import { createLogInFields } from '../E2E-TESTS/utils/logInForm';
import { createPlaceOrderFields } from '../E2E-TESTS/utils/placeOrderForm';



test('DemoBlaze IPhone Order Test', async ({ page }) => {
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

    const orderForm = createPlaceOrderFields();
    const placeOrder = new PlaceOrder(page);
    await DBHomePage.navigateToPhones();
    await placeOrder.clickIphone();
    await placeOrder.clickAddToCart();
    await placeOrder.handleDialog();
    await DBHomePage.navigateToCarts();
    
    await placeOrder.clickPlaceOrder();
    await placeOrder.fillPlaceOrderForm(orderForm);
    await DBHomePage.expectPhoneOrder();
    await placeOrder.clickPurchase();
   
});