import { AlternativeMaterialFormFill } from "../components/Adoptions/AlternateMaterialFillForm";



export const createNewAlternateMAterialFields = (): AlternativeMaterialFormFill => {

    const random13DigitInteger = '9' + Math.floor(Math.random() * 9000000000000);
    console.log(random13DigitInteger);
  
    return ({
      isbn: random13DigitInteger,
      title: "Test Material",
      author: "Test Author",
      publisher: "Test Publisher",
      edition: "4",
      sku: "333",
      url: "https://manager.dev.redshelf.com/",

    })

};