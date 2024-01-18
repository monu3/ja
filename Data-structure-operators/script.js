"use strick";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "GarlicBread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // this is argument de-structure directly from the object gives as argument
  orderDelivery: function ({ time, address, startIndex, mainIndex }) {
    console.log(
      `order recive on ${address}which is ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} at ${time}`
    );
  },

  ordrePasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1} ,${ing2} and ${ing3} .`);
  },
};

// restaurant.orderDelivery({
//   time: 20,
//   address: "surkhet",
//   startIndex: 2,
//   mainIndex: 2,
// });
// /// *******  De-Structuring the object *********

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // destructure by variable name
// const { name: restaurantName, openingHours: hours, order: items } = restaurant;
// console.log(restaurantName, hours, items);

// // default data
// const { menu = [], mainMenu = [] } = restaurant;
// console.log(menu, mainMenu);

// //nested object

// const {
//   fri: { open: O, close: C },
//   sat: { open, close },
// } = openingHours;
//console.log(O, C, open, close);

//

// ********* De-Structuring the Array   *********

// const arr = [1,2,3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;  // De-structuring the array ....array like structure at left side of ' = ' sign means de-structure

// console.log(x,y,z);  // it gives the elements of the array
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(arr);   // it gives the array as output

// let [main, , ,secondary] = restaurant.categories;
// console.log(main,secondary);

//switching the main and secondary items

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main,secondary);

// switching using de-structure

// [main,secondary]= [secondary,main];
// console.log(main,secondary);

// returns 2 variable fro the array
// const [starter,mainCour]= restaurant.order(3,1);
// console.log(starter,mainCour);

// //nested array

// const nested  = [5,6,[2,3,4],7,[9,10]];
// const [i, ,[ ,j,k], ,[l]] = nested;
// console.log(i,j,k,l);

// const array = [2,3,4];
// const [m, , n, u='not found!'] = array;
// console.log(m,n);
// console.log(u);

/// ******** Spread operator ********

// const arr = [1,2,3,4];
// const badArr = [arr[0],arr[1],arr[2],arr[3],5,6];
// console.log(badArr);

// //using spread operator
// const newArr = [...arr,5,6];
// console.log(newArr);

// // to print the single single item or de - structure
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu,'burger'];  // here we are not manipulate the original array ,we create a new array
// console.log(newMenu);
// console.log(...newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 or more array
// const joinArray = [...mainMenuCopy,...restaurant.starterMenu,...restaurant.categories];
// console.log(joinArray);
// console.log(...joinArray);

// //Iterables : array,strings,maps,sets.  but not object ****** spread operator(...) only applies to iterables

// const str = "monu siddiki";
// const arrName = [...str];
// console.log(arrName);
// //De-structure
// console.log(...arrName);

// //const orderPas = [prompt('let make with ! ingredients 1 '),prompt('ingredients 2'),prompt('ingredients 3')];
// //restaurant.ordrePasta(...orderPas);

// //objects

// const newResturant = {foundedIn :1990,...restaurant,foundedBy:'monu siddiki'};
// console.log(newResturant);

// const resturantCopy = {...restaurant};
// resturantCopy.name = 'Hamro Cafe !';
// console.log(restaurant.name);
//console.log(resturantCopy.name);

// ******* rest pattern  ******

// 1. De-Structure

//spread,because it is in right side of ' = ' sign

// const arr = [1, 2, 3, ...[5, 6, 7]];

// //rest,because it is in left side of ' = ' sign

// const [a, b, , ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, others);

// const [first, , third, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // rest pattern shouldn't be in last of an array
// console.log(first, third, otherFoods);

// // REST in Objects

// const { sat, ...weeksdays } = restaurant.openingHours;
// console.log(weeksdays);

// // 2. Functions

// const addition = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++ ) sum = sum + numbers[i];
//   console.log(sum);
// };

// addition(2, 3);
// addition(2, 3, 4, 5, 6);
// addition(2, 3, 4, 5, 6, 10, 11, 17);

// ******** logical operator ******

//use any data- type   , return any data- type,    short -circuiting
// console.log("---- OR ----");
// console.log(3 || "monu");
// console.log("" || "monu");
// console.log(true || "monu");
// console.log(undefined || null); /// both are false value
// console.log(0 || 1);
// console.log(undefined || "" || false || 0 || null || "monu");

// //restaurant.guests1 = 15;
// const guests1 = restaurant.guests1 || 10; // it helps to set the default value
// console.log(guests1);

// console.log("---- AND ----");

//  console.log( 0 && 'monu');
//  console.log('monu' && 7);
//  console.log(false && true);
//  console.log(true && 0);
//  console.log(true && '');
//  console.log(true && 1 && 'monu' && null);
//  console.log(undefined && null);

//  // nullish operator (??)
//  restaurant.guests = 0;
//  const guests = restaurant.guests || 10;
// console.log(guests);

// // nullish : null and undefined (Not 0 and '')
// const guestCorrect = restaurant.guests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: "hamro cafe",
//   numGuest: 20,
// };

// const rest2 = {
//   name: "timro cafe",
//   owner: "monu siddiki",
// };

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.owner = rest1.owner || "sonu siddiki";

// console.log(rest1);
// console.log(rest2);

//**************  for - of looop of array ********** */

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);
// console.log(...menu);

// // for - of loop
// for(const items of menu) console.log(items);

// for (const [i,el] of menu.entries())
// {
//   console.log(`${i+1} : ${el}`);
// }

//  ******** looping of objects ********

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const propertise = Object.keys(openingHours);
// console.log(openingHours);

// for(const keys of Object.keys(openingHours)){
// console.log(keys);
// }

// // properties values
// const values = Object.values(openingHours);
// console.log(values);

// //Entries object
// const Entries = Object.entries(openingHours);
// console.log(Entries);

// for(const [keys,{open , close}]of Entries){
//   console.log(`On ${keys} we open at ${open} and close at ${close} !`);
// }

/// *********** SETS **********

const orderSets = new Set([1, 2, 3, 4, "monu", 1, 3, 5, 7, 3]);

console.log(orderSets);
console.log(new Set('Unom'));
console.log(orderSets.size);
console.log(orderSets.has('monu'));
console.log(orderSets.has(6));


for(const value of orderSets) {console.log(value);}


//example 

const staff = ['teacher','student','worker','teacher','student','worker','teacher'];
//now we need a unique staff so....


//const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)]; // to make an array a array by using sets


console.log(staffUnique);          // array converted into sets



// to find the no. of unique letters present in a string 
 
console.log(new Set('monu siddiki is my name .').size);
