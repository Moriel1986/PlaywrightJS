import { ContactFormFill } from "../components/ContactlFillForm";


export const createNewContactFields = (): ContactFormFill => {

    const random13DigitInteger = '9' + Math.floor(Math.random() * 1000000);
    console.log(random13DigitInteger);
  
    return ({
      contactEmail: "dpurnellqa@gmail.com",
      contactName: "Demoriel Purnell",
      message: "Hi My name is Demoriel Purnell, and I would like a email copy of my reciept please!",

    })

};