import { SignUpFormFill } from "../components/SignUpFillForm";


export const createNewSignUpFields = (): SignUpFormFill => {

    const random13DigitInteger = '9' + Math.floor(Math.random() * 1000000);
    console.log(random13DigitInteger);
  
    return ({
      username: "Moriel1986",
      password: "Kobelastgame60$",

    })

};