import { Locator, Page } from '@playwright/test';

    export type ContactFormFill = {
        contactEmail: string,
        contactName: string,
        message: string
        
    };

    class ContactForm {
        readonly page: Page;
        readonly contactEmailField: Locator;
        readonly contactNameField: Locator;
        readonly messageField: Locator;
        readonly phoneNumField: Locator;
        readonly TopNavContactSendMsgbutton: any;
        
        

    constructor(page: Page) {
        this.page = page;
        this.contactEmailField = this.page.locator('#recipient-email');
        this.contactNameField = this.page.getByLabel('Contact Email:');
        this.messageField = this.page.getByLabel('Message:');
        this.TopNavContactSendMsgbutton = this.page.getByRole('button', { name: 'Send message' });
        
        
    }

    async fillContactForm(values: any) {
        const { contactEmail, contactName, message } = values;

        await new Promise(resolve => setTimeout(resolve, 5000));    

        await this.contactEmailField.focus();
        await this.contactEmailField.fill(contactEmail)

        await this.contactNameField.focus();
        await this.contactNameField.fill(contactName);

        await this.messageField.focus();
        await this.messageField.fill(message);

     }


      async closeContact(){

      }
    
      async sendMessage(){
        await this.TopNavContactSendMsgbutton.click();

      }

}

export default ContactForm;