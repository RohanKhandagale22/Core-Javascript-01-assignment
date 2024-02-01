/*
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.
*/

let payment="paypal";
 
switch(payment)
{
    case "creadit":
        console.log("2% processing fee");
        break;
       
     case "debit":
         console.log("1.5% processing fee");
            break;
    
    case  "paypal" :
        console.log("3% processing fee");
            break;
     default :
       console.log("Not a Vaild method") ;
       break;      
            
}

/*
output
3% processing fee
*/