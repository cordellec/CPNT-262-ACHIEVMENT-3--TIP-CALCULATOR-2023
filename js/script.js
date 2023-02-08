// Assign initial values //
const billTotal = 40;

//I changed the const to "let" because i change the tip rate to a percentage //
let tipRate = 0.18;

// Multiplying the .18 by 100 equals 18, and i added a plus sign in quotation making it a string //
let tipPercentage = tipRate * 100 + "%";

// Calculate tip //
//I used the Math.round method, because I was given $7.199999999999999 as the final owing amount, so this rounds down to $7//
const tipAmount = Math.round(billTotal * tipRate);

// I added the billTotal + tipAmount together to create the overall total payment.
const paymentTotal = billTotal + tipAmount;

// Output
console.log (`${tipPercentage} tip on $${billTotal} is $${tipAmount} making your final total: $${paymentTotal}`);
