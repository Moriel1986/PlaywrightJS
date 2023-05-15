import { Locator, Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;
  url = 'https://www.demoblaze.com/index.html';
  

  constructor(page: Page) { 
    this.page = page;
  }

  async NavtoApp() {
    await this.page.goto(this.url);
  }

  async closeApp() {
    await this.wait(3000);
    await this.page.close();
  }

  async logOut() {
    
  }

  async wait (seconds: any){
    await new Promise(resolve => setTimeout(resolve, seconds));
  }

 
};  
