import { Locator, Page, expect } from '@playwright/test';
import BasePage from '../common/BasePage';


export default class HomePage extends BasePage {
  readonly page: Page;
  readonly leftNavPhones: Locator;
  readonly leftNavLaptops: Locator;
  readonly leftNavMonitors: Locator;
  readonly TopNavHome: Locator;
  readonly TopNavContacts: Locator;
  readonly TopNavAboutUs: Locator;
  readonly TopNavAboutUsClose: Locator;
  readonly TopNavCart: Locator;
  readonly TopNavLogIn: Locator;
  readonly TopNavSignUp: Locator;
  readonly SignUpCloseButton: Locator;
  readonly SignUpbutton: Locator;
  readonly LogOutButton: Locator;
  readonly PurchaseOkButton: Locator;
  
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.leftNavPhones = this.page.getByRole('link', { name: 'Phones' });
    this.leftNavLaptops = this.page.getByRole('link', { name: 'Laptops' });
    this.leftNavMonitors = this.page.getByRole('link', { name: 'Monitors' });
    this.TopNavHome = this.page.getByRole('link', { name: 'Home (current)' });
    this.TopNavContacts = this.page.getByRole('link', { name: 'Contact' });
    this.TopNavAboutUs = this.page.getByRole('link', { name: 'About us' });
    this.TopNavAboutUsClose = this.page.getByRole('link', { name: 'About us' });
    this.TopNavCart =  this.page.getByRole('link', { name: 'Cart', exact: true });
    this.TopNavLogIn = this.page.getByRole('link', { name: 'Log in' });
    this.TopNavSignUp =  this.page.getByRole('link', { name: 'Sign up' })
    this.SignUpCloseButton = this.page.getByRole('dialog', { name: 'New message' }).getByText('Close');
    this.LogOutButton = this.page.locator("//*[contains(text(),'Log out')]");
    this.PurchaseOkButton = this.page.getByRole('button', { name: 'OK' });

    
  }  


  // actions  

  async clicklogOut() {
    await this.LogOutButton.click();
  }

  async navigateToPhones(){
    await this.leftNavPhones.click();
  }

  async navigateToLaptops(){
    await this.leftNavLaptops.click();
  }

  async navigateToMonitors(){
    await this.leftNavMonitors.click();
  }

  async navigateToHome(){
    await this.TopNavHome.click();
  }

  async navigateToContacts(){
    await this.TopNavContacts.click();
  }

  async navigateToAboutUs(){
    await this.TopNavAboutUs.click();
  }

  async navigateToCarts(){
    await this.TopNavCart.click();
  }

  async navigateToLogIn(){
    await this.TopNavLogIn.click();
  }

  async navigateToSignUp(){
    await this.TopNavSignUp.click();
  }
  async clickPurchaseOkButton(){
    await this.PurchaseOkButton.click();
  }


  //expect 

  async expectDemoBlazeLaunch(){
    await expect(this.page.getByRole('link', { name: 'PRODUCT STORE' })).toHaveText('PRODUCT STORE');
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
  }

  async expectContactMsg(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
    // await new Promise(resolve => setTimeout(resolve, 8000));
    // await expect(this.page.getByRole('button', { name: 'Send message' })).toBeVisible();
  }

  async expectSignUp(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
    // await new Promise(resolve => setTimeout(resolve, 8000));
    // await expect(this.page.getByRole('button', { name: 'Send message' })).toBeVisible();
  }

  async expectAboutUs(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
    await new Promise(resolve => setTimeout(resolve, 4000));
    await expect(this.page.locator("//div[@id='navbarExample']//*[contains(text(),'About us')]")).toContainText("About us");
  }

  async expectLogIn(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
    await new Promise(resolve => setTimeout(resolve, 4000));
    await expect(this.page.locator("//*[contains(text(),'Welcome Moriel86')]")).toContainText("Welcome Moriel86");
 }

  async expectLogOut(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
    await new Promise(resolve => setTimeout(resolve, 4000));
    await expect(this.page.locator("//div[@id='navbarExample']//*[contains(text(),'Log in')]")).toContainText("Log in");
  }

  async expectPhoneOrder(){
    await expect(this.page).toHaveURL('https://www.demoblaze.com/cart.html');
    await new Promise(resolve => setTimeout(resolve, 4000));
    await expect(this.page.getByRole('heading', { name: 'Place order' })).toContainText("Place order");
  }

}