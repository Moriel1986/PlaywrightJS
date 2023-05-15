import { Locator, Page } from '@playwright/test';

    export type SignUpFormFill = {
        username: string,
        password: string,
        
    };

    class SignUp {
        readonly page: Page;
        readonly usernameField: Locator;
        readonly passwordField: Locator;
        readonly signUpButton: Locator;
        readonly closeButton: Locator;
        
    

    constructor(page: Page) {
        this.page = page;
        this.usernameField = this.page.getByLabel('Username:');
        this.passwordField = this.page.getByLabel('Password:');
        this.signUpButton = this.page.getByRole('button', {name: 'Sign up'});
        this.closeButton = this.page.getByRole('button', {name: 'Close'});
          
        
    }

    async fillSignUpForm(values: any) {
        const { username, password, } = values;

        await new Promise(resolve => setTimeout(resolve, 5000));    

        await this.usernameField.focus();
        await this.usernameField.fill(username)

        await this.passwordField.focus();
        await this.passwordField.fill(password);

     }


      async closeContact(){
        await this.closeButton.click();

      }
    
      async clicksignUpButton(){
        await this.signUpButton.click();

      }


}

export default SignUp;