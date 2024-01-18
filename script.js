"use strick";

// function logger()
// {
//     console.log("My name is sonu siddiki.");
// }
// logger();
// logger();

// function appleOrange(apples,orange){
//     const juice = `juice with ${apples} apples and ${orange} oranges`;
//     return juice;
// }

// console.log(appleOrange(3,4));
// console.log(appleOrange(2,0));
// console.log(appleOrange(1,9));

// //function declaration
// function age1(birthyear){
//     return 2023-birthyear;
// }
// const Age1 = age1(2003);
// console.log(Age1);

// //function expression
// const Age2= function (birthyear){  //function is work as a whole value
//     return 2023-birthyear;              //annonomous function type
// }
// const age2= Age2(2003);
// console.log("the birthyear is : "+ Age1,age2);

//arrow function

// const age3 = birthyear => 2023-birthyear;        //parameter => 2023-parameter value

// console.log("This is the arrow function demo: "+age3(2003));

// const retirementDate = (Name,Birthyear)=>
// {
//     const birthyear = 2023-Birthyear;
//     const retire = 65- birthyear;
//     return `The ${Name} is retire in ${retire} years.`;
// }

// console.log(retirementDate("Monu",2003));
// console.log(retirementDate("Sabin",1990));

//      ****   Array    *****

// const friends = ['monu','sonu','diwash','arjun'];
// console.log(friends);
// console.log(friends[2]);
// friends[2]= 'sabin';
// console.log(friends);

// const friend = new Array(1,2,5,8,0);

// console.log(friend);
// console.log(friend.length);
// console.log(friend[friend.length-2]);

// const myName = 'Monu';
// const superArray = [myName,'diwash','sabin',23-18,22/11,friends,"MONU SIDDIKI",friend];
// console.log(superArray);
// console.log(superArray[superArray.length-3]);

// const calcAge = function (birthyear)
// {
//     return 2023-birthyear;
// }

// const years = [1990,2000,2005,2010,2016,2021];

// const age1= calcAge(years[0]);
// const age2= calcAge(years[2]);
// const age3= calcAge(years[4]);
// const age4= calcAge(years[5]);

// //indivisual value
// console.log(age1,age2,age3,age4);

// //value in array
// const res = [age1,age2,age3,age4];
// const res1 = [calcAge(years[1]),calcAge(years[3]),calcAge(years[years.length-1])];
// console.log(res);
// console.log(res1);

//push....unshift....pop....include.....shift.....

// const friend = ["arjun","diwash","Sabin","monu"];

// //push -> add at last of array
// friend.push("megha");
// friend.push(20);
// const fri = friend.push("20");

// console.log(friend);
// console.log(friend.length);
// console.log(fri);

// //unshift ->add at first of an array
// friend.unshift("unom");
// friend.unshift("11");
// friend.unshift(10);
// console.log(friend);

// //pop -> to remove the item from last of an array

// friend.pop();
// const fri1 = friend.pop();
// console.log(friend);
// console.log(fri1);

// //shift -> to remove the item from the first of an array

// friend.shift();
// const rem = friend.shift();
// console.log(friend);
// console.log(rem);

// //include ->to give the boolean decision either item is present or not in array list

// console.log(friend.includes("unom"));
// console.log(friend.includes('Sabin'));
// console.log(friend.includes(`arjun`));
// console.log(friend.includes(24));

// //include gives decision in boolean so ..we can use it in if..else statements........

// if(friend.includes("sumit")){
//     console.log(friend.shift());
//     console.log("yes");
// }
// else{
//     console.log(friend.unshift("sumit"));
//     console.log(friend);
// }

///   *****   Object    ******

// const monu = {
//     firstName: "Monu",
//     lastName: "Siddiki",
//     birthyear: 2023-2003,
//     job: "Student",
//     friends: ["sabin","diwash","Arjun","megha"]
// };

// console.log(monu);

// console.log(monu.birthyear);
// console.log(monu["birthyear"]);

// //const ask = prompt("What do u want to know about monu? choose betweent the Firstname,last name,birthyear,job,friends.");
// //console.log(monu[ask]);

// monu.location = "Surkhet";
// monu["facebook"] = "MoNu siddiki";
// console.log(monu);

// //"monu has 3 friends ,and his best friend is called diwash."

// console.log(monu.firstName + " has " + monu.friends.length + " friends ,and his best friend is "+ monu.friends[1]+".");

// const monu = {
//     firstName: "Monu",
//     lastName: "Siddiki",
//     birthyear: 2003,
//     job: "Student",
//     friends: ["sabin","diwash","Arjun","megha"],
//     exam: true,

// calcAge : function (year){  ///without using this keyword
//     return 2023-year;
// }

// calcAge : function (){
//     console.log(this);           /// this --> it indicate the perent object directily....like monu
//     return 2023-this.birthyear;        /// this.birthyear ===> monu.birthyear  are equal !
// }

// calcAge : function (){
//     this.age = 2023 - this.birthyear;   //we create new property age in this monu object
//     return this.age;                     // this.age == monu.age
// },

//     summary: function (){
//         return `${this.firstName} is a ${this.calcAge()} years old and ${ this.exam ? `pass`:`fail`} the csit exam.`;
//     }

// };

//console.log(monu.calcAge(2002));         //without this keyword
//console.log(monu.calcAge());             //with this keyword

// console.log(monu);
// console.log(monu.calcAge());
// console.log(monu.age);

//monu is a 21 years old and has pass the cist exam.
//console.log(monu.summary());

////  *******     looping      *******

// for(let mov=1;mov<=10;mov++)
// {
//     console.log(`I love u ${mov}`);
//     //console.log("I love u " + mov);
// }
// const friends =["sabin","megha","arjun"];
// const monu = ['Monu','Sonu',"Diwash",28,friends,true];
// const types = [];

// for(let i = 0;i<=(monu.length-1);i++)
// {
//     //reading the items of monu array
//     console.log(monu[i],typeof monu[i]);

//     //filling the types array
//     types.push(typeof monu[i]);
// }

// console.log(types);

// const years = [1990,2001,2006,2012];
// const age = [];

// for(let i = 0;i<years.length;i++)
// {
//     age.push(2023-years[i]);
// }

// console.log(age);

//let dice = Math.trunc(Math.random()*6)+1;

//while(dice!==6){
//console.log(`rolled is ${dice}`);
//dice = Math.trunc(Math.random()*6)+1;
//}

//   ******** Hoisting *********...deceration of log before the variable make

//variable hoisting
// console.log("name  " + me); // hoisting only support var variable ....gives undefined
// //console.log("year  "+birthYear);  // let and const are in temporl dead zone due to hoisting
// //console.log("job"+job);

// var me = "monu siddiki";
// let job = "student";
// const birthYear = 2003;

// //funcction hoisting

// console.log(addDecl(2, 3)); // function decration is supported by hoisting
// console.log(addArro); // the output is undefined
// console.log(addArro(2, 3)); //  addArro is undefined so addArro(2,3) is like undefined(2,3) which is not a function
// console.log(addExpr(2, 3)); // addExpr is work as a variable so const addExpr is not supported by hoisting
// //function decration
// function addDecl(a, b) {
//   return a + b;
// }

// //function expression
// const addExpr = function (a, b) {
//   return a + b;
// };

// //arrow function
// var addArro = (a, b) => a + b;

// ******* this *******

//console.log(this); /// it gives the window object

// const calcAge = function (birthYear){
//     console.log(2023-birthYear);
//     console.log(this);
// }

// calcAge(2003);

// const calcAgeArro =  (birthYear) => {
//     console.log(2023-birthYear);
//     console.log(this);
// }

// calcAgeArro(2001);

// const monu = {
//     sname:"siddiki",
//     age : 20,
//     class : "csit",
//     calAge : function (){
//         console.log(this);
//         console.log("birthdate  : "+(2023-this.age));  /// this.age refers to the monu.age ===> 20..so it call the calling object   i.e monu.calAge
//     },
// };

//monu.calAge();

// const sonu = {
//     sname :"K.C",
//     age :22,          // this keyword is pointed to the sonu object
// };

// sonu.calAge = monu.calAge;  // copying the method from the another object

// sonu.calAge();            //calling object is now the sonu ....so this keyword pointed to the sonu .

// const f = monu.calAge;
// f();

//var sname= 'monu';
// const monu = {
//   sname: "siddiki",
//   age: 20,
//   class: "csit",
//   calAge: function () {
//     console.log(this);
//     console.log("birthdate  : " + (2023 - this.age));

//     const arrowFunction = () => {
//       // making a arrow function inside the method is a good ....not a method as a arrow function.
//       console.log(this.age > 19);
//     };
//     arrowFunction(); // output must be true
//   },
//   greet: () => console.log(`hey ${this.sname}`), /// never ever use the arrow function for method (function in object is know as method.)
// };

// monu.greet();
// monu.calAge();


// ***argument keyword****

// const fun = function(a,b){
//     //console.log(arguments);
//     return a+b;
// }

// console.log("first  :  "+ fun(2,3));
// console.log("second  : "+fun(1,3,3,4,5,4)); 


// const funArrow = (a,b) =>{
//     console.log(arguments);
//     return a+b;                // arguments keyword is not working in arrow function
// }

// funArrow(2,3,4);
