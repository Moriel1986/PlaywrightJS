import { expect, test } from '@playwright/test';
import BasePage from '../E2E-TESTS/common/BasePage';
import ContactForm from '../E2E-TESTS/components/ContactlFillForm';
import HomePage from '../E2E-TESTS/components/HomePage';
import { createNewContactFields } from '../E2E-TESTS/utils/contactForm';




test('DemoBlaze Home Page test', async ({ page }) => {
    const buildTest = new BasePage(page);
    await buildTest.NavtoApp();
    const DBHomePage = new HomePage(page);
    await DBHomePage.expectDemoBlazeLaunch();
    const sndMsgData = createNewContactFields();
    const sendMsg = new ContactForm(page);
    await DBHomePage.navigateToContacts();
    await sendMsg.fillContactForm(sndMsgData);
    await sendMsg.sendMessage();
    await DBHomePage.expectContactMsg();
    await buildTest.closeApp();

});

  
  
  