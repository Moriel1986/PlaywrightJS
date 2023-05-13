import { Locator, Page } from '@playwright/test';


export default class BasePage {
  readonly page: Page;
  

  constructor(page: Page) { 
    this.page = page;
  }

  async NavtoApp() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async closeApp() {
    await this.page.close();
  }

  async logOut() {
    
  }

 
};  
