// Chapter 21-25

// Task 1
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// var c = a + " " + b;
// alert("Hello" + " " + c);

// Task 2
// var a = prompt("Enter Your Msg");
// alert("Your Msg length is " + a.length)

// Task 3
// var a = "Pakistani";
// var b = a.indexOf("n");
// alert("The index of n in pakistani is " + b)

// Task 4
// var a = "Hello World";
// var b = a.lastIndexOf("l");
// alert("The last index of l in Hello World is " + b)

// Task 5
// var a = "pakistani";
// var b = a.charAt(3);
// alert("Character at index 3 is : " + b)

// Task 6
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// alert("Hello" + " " + a + " " + b);

// Task 7
// var city = "Hydrabad";
// var after_replacement = city.replace("Hydr", "Islam");
// alert(after_replacement)

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g, "&");
// alert(b);

// Task 9
// var a = "472";
// var b = Number(a);
// var c = parseInt(a);
// console.log(typeof(b))
// console.log(typeof(a))
// console.log(typeof(c))

// Task 10
// var a = prompt("Enter Anything");
// a = a.toLocaleUpperCase();
// alert(a)

// Task 11
// var a = prompt("Enter Anything");
// b = a.slice(0, 1);
// b = b.toLocaleUpperCase();
// a = b + a.slice(1)
// alert(a)

// Task 12
// Miss

// Task 13
// Miss

// Task 14
// Miss

// Task 15
// Miss

// Task 16
// Miss

// Task 17
// var a = prompt("Enter Anything");
// a = a.charAt(a.length - 1);
// alert("Last Character of input is " + a)

// Task 18
// Miss

// Chapter 26-30

// Task 1
// var a = prompt("Enter positive Integer");
// a = Number(a);
// console.log("Round of Value " + Math.round(a))
// console.log("floor of Value " + Math.floor(a))
// console.log("Ceil of Value " + Math.ceil(a))

// Task 2
// var a = prompt("Enter negative Integer");
// a = Number(a);
// console.log("Round of Value " + Math.round(a))
// console.log("floor of Value " + Math.floor(a))
// console.log("Ceil of Value " + Math.ceil(a))

// Task 3
// var a = prompt("Enter negative Integer");
// a = Number(a);
// a = Math.abs(a);
// alert(a)

//Task 4
// var a = Math.random() * 6;
// a = Math.ceil(a);
// alert("Random Number is " + a)

//Task 5
// var a = Math.random() * 2;
// a = Math.ceil(a);
// console.log(a)
// if (a === 2) {
//     alert("Random Coin Value is Head")
// } else if (a === 1) {
//     alert("Random Coin Value is tail")
// }

//Task 6
// var a = Math.random() * 100;
// a = Math.ceil(a);
// alert("Random Number between 1 to 100 : " + a)

// Task 7
// Miss

//Task 8
// var a = Math.random() * 10;
// a = Math.ceil(a);
// console.log(a)
// var b = prompt("Enter Num 1 to 10");
// if (a === +b) {
//     alert("Congratulation You win")
// } else {
//     alert("Try Again")
// }

// Chapter 31-34

// Task 1
// var a = new Date();
// alert(a)

// Task 2
// var a = new Date();
// var month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
// alert("Current Month is " + month[a.getMonth()]);

// Task 3
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// alert("Today is " + month[a.getDay()]);

// Task 4
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// if (a.getDay === "0" || a.getDay === "6") {
//     alert("Today is Funday")
// } else {
//     alert("Today is " + month[a.getDay()])
// }

// Task 5
// Miss

// Task 6
// var a = new Date();
// var c = a.getTime();
// console.log(c)
// b = a.getTime() / (1000 * 60 * 60);
// console.log(b)

// Task 7
// var a = new Date();
// var b = a.getHours();
// var c = a.getMinutes();
// console.log(b)
// console.log(c)
// if (b === 12) {
//     alert("Its " + 12 + ":" + c + " PM")
// } else if (b === 13) {
//     alert("Its " + 01 + ":" + c + " PM")
// } else if (b === 14) {
//     alert("Its " + 02 + ":" + c + " PM")
// } else if (b === 15) {
//     alert("Its " + 03 + ":" + c + " PM")
// } else if (b === 16) {
//     alert("Its " + 04 + ":" + c + " PM")
// } else if (b === 17) {
//     alert("Its " + 05 + ":" + c + " PM")
// } else if (b === 18) {
//     alert("Its " + 06 + ":" + c + " PM")
// } else if (b === 19) {
//     alert("Its " + 07 + ":" + c + " PM")
// } else if (b === 20) {
//     alert("Its " + 08 + ":" + c + " PM")
// } else if (b === 21) {
//     alert("Its " + 09 + ":" + c + " PM")
// } else if (b === 22) {
//     alert("Its " + 10 + ":" + c + " PM")
// } else if (b === 23) {
//     alert("Its " + 11 + ":" + c + " PM")
// } else {
//     alert("Its " + b + ":" + c + " AM")
// }

// Task 8
// var a = new Date("December 31, 2020")
// alert(a);

// Task 9
// var a = new Date("June 18, 2015");
// a = a.getTime();
// var b = new Date();
// b = b.getTime();
// var c = b - a;
// alert(Math.round(c / (1000 * 60 * 60 * 24)) + " Days have passed since 1st Ramzan, 2015")

// Task 10, 11, 12
// Miss

// Task 13
// var b = prompt("Enter Your Year of Birth", "e.g 1999")
// b = Number(b);
// var a = new Date();
// a = a.getFullYear();
// var c = a - b;
// alert("Your age is " + c)

// Task 14
// var a = prompt("Enter Your February Units");
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>ABC Customer</b> <br>")
// document.write("Month: <b>February</b> <br>")
// document.write("Number of Units: " + "<b>" + a + "</b> <br>")
// document.write("Charges per Unit: <b>16</b> <br><br>")
// a = a * 16;
// document.write("Net Amount Payable (within due date) : " + "<b>" + a + "</b> <br>")
// document.write("Late Payment Surcharge: <b>350</b> <br>")
// document.write("Gross Amount Payable (after due date) : " + "<b>" + ((+a) + 350) + "</b> <br>")

// Chapter 35-38

// Task 1
// var a = new Date();
// document.write("Current Date is " + a)

// Task 10
var a = prompt("Enter palindrome Word");
for (i = a.length - 1; i < 0; --i) {
    console.log("tabish")
}

// Task 14
// function calcCircumference(radius) {
//     var a = 3.142;
//     var b = 2 * a * radius;
//     return b
// }
// var a = calcCircumference(8);
// alert("The circumference is " + a)

// function calcArea(radius) {
//     var a = 3.142;
//     var b = a * radius * radius;
//     return b
// }
// var a = calcArea(8);
// alert("The Area is " + a)