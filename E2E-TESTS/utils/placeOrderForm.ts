import PlaceOrder, { PlaceOrderFormFill } from "../components/PlaceOrderFillForm";

export const createPlaceOrderFields = (): PlaceOrderFormFill => {

    const creditCardNum = '5373' + Math.floor(Math.random() * 100000000);
    console.log(creditCardNum);
  
    return ({
      name: "Demoriel",
      country: "United States",
      city: "Chicago",
      creditCard : creditCardNum ,
      month: "May",
      year: "2023"

    })

};