import { LogInFormFill } from "../components/LogInFillForm";


export const createLogInFields = (): LogInFormFill => {

    const random13DigitInteger = '9' + Math.floor(Math.random() * 1000000);
    console.log(random13DigitInteger);
  
    return ({
      username: "Moriel86",
      password: "Kobegoat#0824",

    })

};