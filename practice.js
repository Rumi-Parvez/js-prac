// ==

const price1 = 80;
const price2 = 120;

let comparePrices1 = price1 == price2 ;
console.log(comparePrices1);




// ===
let comparePrices2 = price1 === price2 ;
console.log(comparePrices2);


// !=
let comparePrices3 = price1 != price2 ;
console.log(comparePrices3);


// !== 
let  comparePrices4 = price1 !== price2 ;
console.log(comparePrices4);    

// >
let comparePrices5 = price1 > price2 ;
console.log(comparePrices5);


// <
let comparePrices6 = price1 < price2 ;
console.log(comparePrices6);


// <=
let comparePrices7 = price1 <= price2 ;
console.log(comparePrices7);


// >=
let comparePrices8 = price1 >= price2 ;
console.log(comparePrices8);

console.log("---------------------------------------");


console.log("comparing with string to number");

const x = 10 ;
const y = "10";

console.log(x == y); // true 

const m = 10 ;
const n = "10";

console.log(m === n);

console.log("---------------------------------------");


console.log ("rainging if condition");

const isRaining = false;


console.log(" isRaining = " + isRaining);
if (isRaining === true) {
    console.log("take an umbrella");
}
else {
    console.log("no need to take an umbrella");
}

console.log("---------------------------------------");


console.log("products stocking ");

const stockedProducts = 100;

if ( stockedProducts === 0) {
    console.log("Empty stock");
}
if (stockedProducts > 0) {
    console.log("Stock available");
}

console.log("---------------------------------------");

console.log("wather station");


const temperature = -31;

if (temperature > 0) {
    console.log("temperature is positive");

}
else {
    console.log("temperature is not negative");
}

console.log("---------------------------------------");

console.log("leap year calculation ");

const year = 2028;

if ( year % 4 === 0) {
    console.log("leap year");

}

else {
    console.log("not a leap year");
}


console.log("---------------------------------------");

const speed = 70;
if (speed > 80) {
    console.log("Over speed");
}
else {
    console.log("Normal speed");

}


console.log("---------------------------------------");

const hasTicket = true;
const age = 19;
const withPersion = false;

if (hasTicket === true && age >= 18 && withPersion === true) {
    console.log("Entry Allowed");

}

else {
    console.log("Entry Not Allowed");
}



console.log("---------------------------------------");
if (hasTicket === true && (age >= 18 || withPersion === true)) {
    console.log("Entry Allowed");

}

else {
    console.log("Entry Not Allowed");
}


console.log("---------------------------------------");

const isHoliday = false;
const isWeekend = false;

if (isHoliday === true || isWeekend === true) {
    console.log("No Works For Today");
}
else{
    console.log("Jao mara khao kaj kor");

}

console.log("---------------------------------------");

const username = "Rumi";
const pass = "12456";

if (username === "Rumi" && pass === "123456") {
    console.log("Login Success");

}
else {
    console.log("ja beda mara kha Log in kor");
}



console.log("---------------------------------------");

console.log("Result sheet");

const number = 52;

if (number >= 80 && number <= 100) {
    console.log("A+");
}

if (number >= 70 && number <= 79){
    console.log("A");
}

if (number >= 60 && number <= 69){
    console.log("A-");
}

if (number >= 50 && number <= 59){
    console.log("B");
}

if (number >= 40 && number <= 49){
    console.log("C");
}

if (number >= 33 && number <= 39){
    console.log("D");
}

if (number < 33){
    console.log("KI Pora leka korcho to? korte hobe korte hobe nokol ar hobe na");
}



console.log("---------------------------------------");

const bmi = 32 ;

if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
}

else{
    console.log("Obesity");
}



console.log("---------------------------------------");

const month = 7 ;

if (month ===1 || month === 2 || month === 12) {
    console.log("Winter");
}

if (month === 3 || month === 4 || month === 5) {
    console.log("summer");
}

if (month === 6 || month === 7 || month === 8) {
    console.log("Moonsoon");
}

if (month === 9 || month === 10 || month === 11) {
    console.log("Autumn");
}



