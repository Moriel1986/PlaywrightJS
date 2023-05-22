import { Locator, Page } from '@playwright/test';

    export type PlaceOrderFormFill = {
        name: string,
        country: string,
        city: string,
        creditCard: string,
        month: string,
        year: string
        
    };

    class PlaceOrder {
        readonly page: Page;
        readonly nameField: Locator;
        readonly countryField: Locator;
        readonly cityField: Locator;
        readonly creditCardField: Locator;
        readonly monthField: Locator;
        readonly yearField: Locator;
        readonly closeButton: Locator;
        readonly purchaseButton: Locator
        readonly iphoneItem: Locator;
        readonly addToCart: Locator;
        readonly placeOrder: Locator;

        
    

    constructor(page: Page) {
        this.page = page;
        this.nameField = this.page.getByLabel('Total: 1580');
        this.countryField = this.page.getByLabel('Country:');
        this.cityField = this.page.getByLabel('City:');
        this.creditCardField = this.page.getByLabel('Credit card:');
        this.monthField = this.page.getByLabel('Month:');
        this.yearField = this.page.getByLabel('Year:');
        this.closeButton = this.page.getByRole('button', { name: 'Close' }).first();
        this.purchaseButton = this.page.getByRole('button', { name: 'Purchase' });
        this.iphoneItem = this.page.getByRole('link', { name: 'Iphone 6 32gb' });
        this.addToCart = this.page.getByRole('link', { name: 'Add to cart' });
        this.placeOrder = this.page.getByRole('button', { name: 'Place Order' });

    }

    async fillPlaceOrderForm(values: any) {
        const { name, country, city, creditCard, month, year } = values;

        await new Promise(resolve => setTimeout(resolve, 5000));

        await this.nameField.click();
        await this.nameField.fill(name)

        await this.countryField.click();
        await this.countryField.fill(country);

        await this.cityField.click();
        await this.cityField.fill(city);

        await this.creditCardField.click();
        await this.creditCardField.fill(creditCard);

        await this.monthField.click();
        await this.monthField.fill(month);

        await this.yearField.click();
        await this.yearField.fill(year);

     }

    //  if (await this.termOptingDeadlineField.isVisible()) {
    //     await this.termOptingDeadlineField.focus();
    //     await this.termOptingDeadlineField.type(optDate);
    // }


      async clickClosePlaceOrder(){
        await this.closeButton.click();

      }
    
      async clickPurchase(){
        await this.purchaseButton.click();

      }

      async clickIphone(){
        await this.iphoneItem.click();
      }

      async clickAddToCart(){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.addToCart.click();
      }
        

      async clickPlaceOrder(){
        await this.placeOrder.click();
        
      }

      async handleDialog(){
        this.page.reload();
      }
}

export default PlaceOrder;


