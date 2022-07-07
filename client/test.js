
// // let arr = [{ name: 'hardik', isok: false }, { name: 'hardik2', isok: true }];


// // let resutl = arr.filter(hardik => {
// //     if (hardik.isok) {
// //         return hardik.name;
// //     }
// // });


// // console.log(resutl);

// // let fruits = ['banana', 'orange', 'mango', 'lemon', 'tinde']


// // // reverse the aray

// // for (let index = 0; index < fruits.length/2; index++) {
// //     let ele = fruits[index];
// //     fruits[index] = fruits[fruits.length-1-index];
// //     fruits[fruits.length-1-index] = ele;
// // }

// // console.log(fruits);


// // const name = n => n*n;

// // function calculateBMI(weight, height)
// // {
// //    let BMI = weight/(height*height)
// //    let result;
// //    switch (BMI)
// //    {
// //       case BMI < 18.5:
// //          result = 'Underweight'
// //          break
// //       case BMI>=18.5 && BMI<=24.9:
// //          result = 'Normal weight'
// //          break
// //       case (BMI>=25 && BMI<=29.9):
// //          result = 'Overweight'
// //          break
// //       case (BMI>30):
// //          result = 'Obese'
// //          break
// //       default:
// //           console.log(BMI);
// //          result = 'Invalid data'

// //    }
// //    return result
// // }

// // console.log(calculateBMI(62, 1.67));
// const numbers = [1, 2, 3, 4]


// n = 6;

// // the first three numbers are 0,1,2 any subsequent number is the sum of the previous three numbers withou array
// let e1 = 0;
// let e2 = 1;
// let e3 = 2;

// let str ='';
// let print = e1 + ", " + e2 + ", " + e3;
// for (let index = 0; index < 6; index++) {
//     let ele = (e1 + e2 + e3)*2;
//     e1 = e2;
//     e2 = e3;
//     e3 = ele;
//     if (index!= 5)
//     str += ele + ", ";
//     else {
//       str += ele;
//     }
// }

// console.log(str);



// <p>asadadsadsadsdsaasd<em>asdas</em><del><em>asdasd</em></del></p> parse to html with text with multiple tags

// function parseHTML(str) {
//     let arr = str.split('<');
//     let result = '';
//     for (let index = 0; index < arr.length; index++) {
//         let ele = arr[index];
//         if (ele.includes('>')) {
//             let arr1 = ele.split('>');
//             let tag = arr1[0];
//             let text = arr1[1];
//             if (tag.includes('/')) {
//                 result += `</${tag.substring(1)}>`;
//             } else {
//                 result += `<${tag}>${text}</${tag}>`;
//             }
//         } else {
//             result += ele;
//         }
//     }
//     return result;
// }



// (function(){
//   console.log('yes');
//   document.getElementById('test').innerHTML = parseHTML('<p><strong>Hardik </strong><em><strong>Nandwani</strong></em></p>');
// })();

// console.log(parseHTML('<p>asadadsadsadsdsaasd<em>asdas</em><del><em>asdasd</em></del></p>'));

// "\"<button class=\"btn btn-danger btn-lg\"><span class=\"glyphicon glyphicon-trash\"></span></button>\""


// console.log(JSON.parseHTML("\"<button class=\"btn btn-danger btn-lg\"><span class=\"glyphicon glyphicon-trash\"></span></button>\""));


// this.a = 5;
// function test() {


//     console.log(this.a);
// }


// test.call(this);
// console.log(a);
// console.log(b);
// let a = 5;
// var b = 6;

// console.log(this.a); 



// var num =4;
// function outer() {
//     var num = 5;
//     function inner() {
//         num++;
//         // var num = 7;
//         console.log(num);
//     }
//     inner();
//     console.log(num);
// };
// outer();

//example of a closure
// function outer () {
//     var num = 5;
//     return function inner () {
//         num++;
//         console.log(num);
//     }
// }
// outer()();


//linked list removed nth node from last

// function remvoeNthNode () {
//     let head = {
//         data: 1,
//         next: {
//             data: 2,
//             next: {
//                 data: 3,
//                 next: {
//                     data: 4,
//                     next: {
//                         data: 5,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
//     let count = 0;
//     let current = head;
//     while (current.next) {
//         current = current.next;
//         count++;
//     }
//     let n = count - 2;
//     current = head;
//     while (n > 0) {
//         current = current.next;
//         n--;
//     }
//     current.next = current.next.next;
//     return head;
// }


// logger();

// function logger() {
//     console.log('this is the function');
// }

// newFunction();
// function newFunction() {
//     a = 10;

//     console.log(a);

//     var a;
// }

// function greeting() {
//     var message = 'Hi';

//     function sayHi() {
//         var message = 'Hello';
//         console.log(message);
//     }

//     sayHi();
//     console.log(message);
// }

// greeting();

// var v = 10 + '5'  // 105
// var w = 10 - '5' // 5
// var x = 10 * '5' // 50
// var y = 10 / '5' // 2
// var z = 10 % '5' // 0

// console.log(v);
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);


// const numbers = [15.5, 2.3, 1.1, 4.7]; 

// let ans = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }
// , 10);

// console.log(ans);

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
//     return null;
//  })();

//make google meet layout

// const minimumProductOfAnArray = (arr) => {

//     let zero_count = 0;
//     let neg_count = 0;
//     let pos_count = 0;

//     for (let index = 0; index < arr.length; index++) {

//         if (arr[index] == 0) {
//             zero_count++;
//         }
//         if (arr[index] < 0) {
//             neg_count++;
//         }
//         if (arr[index] > 0) {
//             pos_count++;
//         }
//     }

//     if (zero_count === arr.length-1 || (neg_count === 0 && zero_count > 0 ) ) {
//         return 0;

//     }



// }


// minimumProductOfAnArray([1, 2, 3, 4, 5]);


// const a = [1,1,2,2,3,3,4,4,5,5];


// console.log([...new Set(a)]);


// let detaisl = {
//     name : 'hardik',
//     add : {
//         country : 'India',
//         city : {
//             area : 'ramesh Nagaer',
//             district : 'Karnal'
//         }
//     }

// }

// const  { add : {city : {area}} } = detaisl;


// console.log(area);
// If a == 1 && a == 2 && a == 3, what will be the value of a ?


// const a = [1,2,3];

//  const newArr = a.map((ele,i,arr) => {
//      return ele * 3 + i;
//  });


//  console.log(newArr);




// Array.prototype.myMap = function (cb) {

//     let newArray = []
//     for(let i =0; i<this.length ;i++) {
//         newArray.push(cb(this[i], i, this));
//     }

//     return newArray;
// }

// Array.prototype.myFilter = function (cb) {
//     let temp = [];

//     for(let i =0;i <this.length ;i++) {
//         if (cb(this[i],i,this)) {
//             temp.push(this[i]);
//         }
//     }

//     return temp;
// }


// Array.prototype.myReduce = function (cb,n) {
//     let ans = n;

//     for(let i =0; i< this.length; i++) {
//         n = n ? cb(ans, this[i], i, this) : this[i];
//     }

//     return ans;
// }




// const ans = a.myMap((ele, i , a) => {
//     return ele * 3 +i;
// })

// console.log(ans);

// // 

// let expr = "([{}])";

// for(let i = 0; i < expr.length; i++)
//     {
//         let x = expr[i];
 
//         if (x == '(' || x == '[' || x == '{')
//         {
//             stack.push(x);
//             continue;
//         }
//         if (stack.length == 0)
//             return false;
             
//         let check;
//         switch (x){
//         case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;
 
//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;
 
//         case ']':
//             check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//     }
 
//     // Check Empty Stack
//     return (stack.length == 0);
// }

// const myDebounce = (cb, d) => {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         },d);
//     };
// };

// function yes () {

//     console.log(typeof null)
// }

// handle = myDebounce((name , yes) => {
//     console.log(name);
//     yes();
// }, 1000);

// handle('hardik',yes);

// const respomse = [
//     {
//         'id' : 'sing-up-form',
//         'name': 'Signup form',
//         'catogery': 'HTML'
//     },
//     {
//         'id' : 'ranbow-circle',
//         'name': 'Ranbow Circles',
//         'catogery': 'CSS'
//     },
//     {
//         'id' : 'sing-up-form',
//         'name': 'Signup form',
//         'catogery': 'HTML'
//     },
// ]


// function getQuestionCategory(questions) {
//     const QuestionCategory = {};
//     questions.forEach(question => {
//         if(QuestionCategory.hasOwnProperty(question.catogery)) {
//             QuestionCategory[question.catogery].push(question);
//         }
//         else {
//             QuestionCategory[question.catogery] = [question];
//         }
//     });
//     return QuestionCategory;
// }

// for (const [key, value] of Object.entries(getQuestionCategory(respomse))) {
//     console.log(key, value);
// }









// function higherOrderCompoent (printArray) {

//     newArray = printArray.map(ele => {
//         return ele +2;
//     })

//     return newArray;

// }



// function printArray(arr) {

//     return higherOrderCompoent(arr);



// }

// const printArray = higherOrderCompoent;

// console.log(printArray([1,2,3]))


// arr=[5,5,2,2,2,4,9];

// function countFrequency(arr) {
//     let obj = {}
    
//     arr.forEach(ele => {
//         if (obj.hasOwnProperty(ele)) {
//             obj[ele] = obj[ele] + 1;
//         }
//         else {
//             obj[ele] = 1;
//         }
//     })
//     console.log("running");
//     console.log(obj);

// }

// countFrequency(arr);

// const newArray = [...new Set(arr)];

// console.log(newArray);

// function removeDuplicate (arr) {

    

// }


// function curringSum(a) {
//     return function (b) {
//         if (b!= undefined) {
//         return curringSum(a + b);
//         } else {
//             return a;
//         }
//     }
// }


// console.log(curringSum(2)(3)(4)());


// let x = [1,2,3,4,5,6,7,11,12,14,15];
// let callback = (threshold) => (x) => (x % 2==0 && x > threshold);

// let results1 = x.filter(callback(5)); // Even numbers higher than 5
// let results2 = x.filter(callback(10)); // Even numbers higher than 10

// console.log(results1,results2);
// const arr = [5,3,1,4,12,7,3,7];

// function removeDuplicate(arr)  {

//     const map = new Map();
    
//     arr.forEach(ele => {
//         if (!map.has(ele)) {
//             map.set(ele, 1);
//         }
//     })

//     return Array.from(map.keys());
// }

// console.log(removeDuplicate(arr));


// function cal(num) {

//     this.finalAns = num;
    
//     this.add = function (a) {
//         this.finalAns = this.finalAns + a;
//         return this
//     }

//     this.sub = function (b) {
//         this.finalAns = this.finalAns - b;
//         return this
//     }

//     this.mul = function (c) {
//         this.finalAns = this.finalAns * c;
//         return this
//     }

//     this.val = function () {
//         console.log(this.finalAns);
//     }

//     return this;

// }

// cal(1).add(2).val();

// function cal(num) {

// }


// function printName() {
//     let counter = 1;

//     return function increaseCounter() {
//         counter++;
//         return counter;
//     }

    
// }


// let printCounter = printName();

// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());
// console.log(printCounter());





// let x = [1,2,3,4,5,6,7,11,12,14,15];

// let callback = (threshold) => (x) => (x % 2==0 && x > threshold);



// let response1 = x.filter(callback(5));


// console.log(response1); 

// flat an object 
// let obj = {
//     'firstName': 'Hardik',
//     'lastName': 'Kumar',
//     'age': 30,
//     'address': {
//         'city': 'Mumbai',
//         'state': 'Maharashtra',
//         'country': 'India',
//         'pincode': [1234,5678],
//         'home': {
//             'name': null,
//             'address': 'Mumbai',
//             'city': 'Mumbai',
//         }
//     }
// }

// console.log(Object.entries(obj).forEach(ele => {
//     console.log(ele);
// }));

// console.log(typeof null);

// function flatObject (obj) {
//     let flatObj = {};
//     let keys = Object.keys(obj);
//     console.log(keys);
//     keys.forEach(key => {
//         if (typeof obj[key] === 'object') {
//             let innerKeys = Object.keys(obj[key]);
//             innerKeys.forEach(innerKey => {
//                 flatObj[`${key}.${innerKey}`] = obj[key][innerKey];
//             })
//         } else {
//             flatObj[key] = obj[key];
//         }
//     })

//     console.log(flatObj);
// }

// flatObject(obj);

// var test = {
//     a: 'jack',
//     b: {
//         c: 'sparrow',
//         d: {
//             e: 'hahaha'
//         }
//     }
// };

// function traverseAndFlatten(currentNode, target, flattenedKey) {
//     for (var key in currentNode) {
//         if (currentNode.hasOwnProperty(key)) {
//             var newKey;
//             if (flattenedKey === undefined) {
//                 newKey = key;
//             } else {
//                 newKey = flattenedKey + '.' + key;
//             }

//             var value = currentNode[key];
//             if (typeof value === "object" && value !== null) {
//                 traverseAndFlatten(value, target, newKey);
//             } else {
//                 target[newKey] = value;
//             }
//         }
//     }
// }

// function flatten(obj) {
//     var flattenedObject = {};
//     traverseAndFlatten(obj, flattenedObject);
//     return flattenedObject;
// }

// // var flattened = JSON.stringify();
// console.log(flatten(obj));

// flatten(obj);



// const name = () => {
//     let counter = 0;
//     return function yes () {
//         counter++;
//         console.log(counter);
//     }

// }

// const callName = name();

// callName();
// callName();
// callName();
// callName();
// callName();
// callName();
// callName();
// callName();
// callName();
// callName();

// const numbers = [1, 2, 3, 4, 5];

// const totalValue = numbers.reduce((sum, number) => sum + number);
// console.log(totalValue);
