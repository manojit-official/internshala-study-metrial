// let age = 30;
// if(age<18){
//     console.log("ishq di gali vich no entry");
// }
// else if(age>18 && age<25){
//     console.log("kundi mat khadka raja seedha andar aja")
// }
// else{
//     console.log("pile pile o meri raja")
// }

// let arr = [
//     10,
//     20,
//     30,
//     40,
//     50,
//     60
// ]

// let obj = {
//     naam : "Manojit Biswas",
//     age : 25,
//     hasDog : true
// }

// console.log (obj)

// const arr=[...'Manojit']
// console.log(arr)
//  var a = 1;

//  function sam(){
//     var b = 100;
//     console.log(b);;
//  }

// var a=10)
// let b = 20
// con
// const c ■ 30/
// if(true)l
// var a = truei let b= 500;const c= 700;console. log(a);console. log(b);console.log(c);
// if(true)
// consote.log(d);
// var d= 100:
// console.log(d):console. logla)1 console. log(b)/console. loglc)1

// function sumNumbers(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
//   }
  
//   const arr = [20, 40, 60, 80, 100];
//   const result = sumNumbers(arr);
//   console.log(result);  // Output: 300

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// let count = 0;

// function getCount() {
//   console.log(count);
// }

// function resetCount() {
//   count = 0;
// } 

// function decreseCount() {
//   count = count - 1;
// }

// function increaseCount() {
//   count = count + 1;
// }

// getCount();
// resetCount();
// increaseCount();
// increaseCount();
// increaseCount();
// getCount();



//METHOD TO CALL AN API
// let API="https://api.tvmaze.com/search/shows?q=girls"
// fetch(API)

// FETCH -> WEB API (BROWSER)-> GIVES YOU DATA BUT INCOMPLETE AT FIRST GO -> .json() to get the complete data
// -> RETURNS A PROMISE(I CAN ONLY HANDLE PROMISE)
// -> JSON returns a promise, with entirely complete data

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     // console.log(resp);
//     return resp.json()
// })
// .then(function(data){
//     console.log(data , "final data");  
// })
// .catch(function(err){
//     console.log(err);
// })

// ----------------------------------------------------------

// FETCH
// 1. promise

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     return resp.json() //entire data
// })
// .then(function(anything){
//     console.log(anything);
// })
// .catch(function(err){
//     console.log(err);
// })
// // --------------------
// // 2. async await
// async function callApi(){
//     let resp = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let data = await resp.json();
//     console.log(data);
// }

// callApi()
// // ----------------------------------------------------------
// // AXIOS -> RETURNS A PROMISE, WHICH GIVES ENTIRE DATA AT ONCE
// // 1. promise
// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     // console.log(resp , "then");
//     console.log(resp.data);
// })
// .catch(function(err){
//     console.log(err);
// })
// // -------
// // 2. async
// async function callApi2(){
//     let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(resp.data); 
// }
// callApi2()
// // // ----------------------------------------------------------
// axios.get("https://api.github.com/users/Samarth0606")
// .then(function(resp){
//     console.log(resp.data);
// })
// .catch(function(err){
//     console.log(err);
// })

// async function callApi2(){
//     let resp = await axios.get("https://api.github.com/users/alokiit");
//     console.log(resp.data); 
// }

// const array = [1, 4, 6, 5, 8];

// function evenNum(arr){
//     return newArr = arr.filter(num => num%2 == 0);
//
// }
// console.log(evenNum(array));

document.querySelector