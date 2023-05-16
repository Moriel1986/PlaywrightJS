import { Locator, Page } from '@playwright/test';

    export type LogInFormFill = {
        username: string,
        password: string,
        
    };

    class LogIn {
        readonly page: Page;
        readonly usernameField: Locator;
        readonly passwordField: Locator;
        readonly logInButton: Locator;
        readonly closeButton: Locator;
        
    

    constructor(page: Page) {
        this.page = page;
        this.usernameField = this.page.locator('#loginusername');
        this.passwordField = this.page.locator('#loginpassword');
        this.logInButton = this.page.getByRole('button', {name: 'Log in'});
        this.closeButton = this.page.getByRole('dialog', { name: 'Log in' }).getByText('Close');
          
        
    }

    async fillLogInForm(values: any) {
        const { username, password, } = values;

        await new Promise(resolve => setTimeout(resolve, 5000));    

        await this.usernameField.focus();
        await this.usernameField.fill(username)

        await this.passwordField.focus();
        await this.passwordField.fill(password);

     }

    //  if (await this.termOptingDeadlineField.isVisible()) {
    //     await this.termOptingDeadlineField.focus();
    //     await this.termOptingDeadlineField.type(optDate);
    // }


      async closeContact(){
        await this.closeButton.click();

      }
    
      async clicksLoginButton(){
        await this.logInButton.click();

      }


}

export default LogIn;