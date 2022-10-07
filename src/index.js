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

// let a=1;

// let b=2;

// const min = (a, b) => {
//     if (a<b) {
//         return a
//     }
//     else {
//         return b
//     }
// }

// console.log(min);



// function sumTu (n) {
//     if (n === 1) return n;

//     return n + sumTu(n-1); 
// }

// sumTu(10);



// let a = 2;
// let b = 3;

// function sum () {
//     if (n===a) return a;
//     return a+sum(b);  
//     if (n===b) return b;
//     return b+sum(a);
// }
// sum(a);



// const list = {
//     a: 'a1',
//     b: 'b1',
//     next: {
//         a: 'a1',
//         b: 'b1',
//         next: {
//             a: 'a1',
//             b: 'b1',
//             next: {

//             }
//     }
//     }
// }

// function showA (list) {
//     for(let elem in list) {
//         if (a) console.log(list.a);
//         showA (list.next)

//     }
// }

// showA();


// function showA (list) {
//     if(list) console.log(list.a) 


// }



// let str = "aaa bbb ccc";



// str = str.substr(4, 3);

// console.log(str);


//lesson 5




// let array = [2, 3, 4, undefined, null, '', false, 5, 6];

// array.reverse();
// console.log(array);






// function filter (array, collback) {
//     const temArr = []
//     for (let i = 0; i <array.length; i++) {
//         const res = collback(array[i],  i, array);
//         if(res) {
//             temArr.push(array[i])
//         }
//     }

//     return temArr;
// }

// const compact = (arr) => {
//     const callback = (item) => {
//         return Boolean(item)
//     }

//     arr.filter(callback)
// }

// compact(array)



// lesson 6



// arr = ['bread', 'sausage', , 'jbhv', 'cheese', 'jbhhv', 'jghf'];

// arr2 = ['bread', 'sausage', "cheese"];

// const nhjgg = arr
//     .filter((item) => arr2.includes(item))
//     .map((item) => item + " ")
//     .reduce((sandwich, item) => {
//         if ('bread') {
//             return sandwich += item;
//         }
//         if ('sausage') {
//             return sandwich += item;
//         }
//         if ('cheese') {
//             return sandwich += item;
//         }
//     }, " ");

//     console.log(nhjgg);



// lesson 6

// const regExp1 = new RegExp("tamplate", 'i')

// const str = 'Tamplate';
// console.log(RegExp.match(str));
// console.log(RegExp.test(str));


// console.log(str.replaceAll(RegExp, ));



// const user = {
//     firstName: 'Alex',
//     lastName: 'asd',
//     metod() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const str = user.metod();

// console.log(str);



// const user2 = {
//     firstName: 'Olga',
//     lastName: 'gfbngfjb',
// }

// const str2 = user.metod.bind(user2)();

// console.log(str2);

// call - подменить
// aplay

function UserES5 (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

const user1 = new UserES5('Olga', 'Chueshova');

console.log(user1.name());


class UserES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name () {
        return `${this.firstName} ${this.lastName}`;
    }; 
}



const user2 = new UserES6('Olga', 'Chueshova');

console.log(user2.name());





