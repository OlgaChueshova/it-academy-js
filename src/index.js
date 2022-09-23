// import "./main.scss";

// const add123 = (a, b) => a + b;

// const res = add123(222, 3);
// console.log("Helloasda");


// // const unreadMessages
// // const isRegistered
// // const favoriteGenres

// let i=0;

// while (i<10) {
//     i++;
//     console.log(i);
// }


// let i=0;

// do {
//     i++;
//     console.log(i);
// } while (i<10);


// let i="#";

// do {

//     if(i%2=0) {
//       i=" " ;
//       console.log(i); 
//     }
//     else {
//         i="#";
//         console.log(i);
//     }
  
// } while (i.length<7);





// for (let i="#"; i.length<7; i+="#") {
//     console.log(i);
// }

// let i="#";

// while(i.length<7) {
//     i=i+="#";
//     console.log(i);
// };



// for (let i ="#"; i<8; )


// const currency = {
//     usd: "dollar",
//     blr: "bel rouble",
//     rus: " russian rouble",
// };

// // const isCurrency = prompt('Введите валюту!');

// // console.log(currency[isCurrency]);

// let descriptor = Object.defineProperty(currency, "usd", {
//     writable: false,
//     enumerable: true,
//     configurable: false,
// })

// descriptor.usd = "euro";

// console.log(descriptor.usd);

// for (let kay in currency) {
//     console.log(currency[kay]);
// }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for (let kay in salaries) {
//     sum += salaries[kay]
// }
// console.log(sum);


// let a = 2;

// function sum (a) {
//     console.log(a*2);
// }


// function sayHi(...arg) {
//     for (let nam of arg) {
//         console.log(nam)
//     }
// }

// sayHi("Olga", "Pete" )


// let sum = (...rest) => {

//     for (let i of rest) {
//         return i+= i;
//     }
// }

// let sum2 = sum(1, 2, 5, 10);

// console.log(sum2);

let a=1;

let b=2;

const min = (a, b) => {
    if (a<b) {
        return a
    }
    else {
        return b
    }
}

console.log(min);


