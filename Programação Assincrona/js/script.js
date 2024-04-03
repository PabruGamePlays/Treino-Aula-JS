//1 - stTimeout
console.log("Ainda não executu");

setTimeout(function (){
    console.log("Requisição assíncrona");
}, 2000);

console.log("Ainda não executu 2");


//2 - setInterval
console.log("Ainda não começou");

//setInterval(function(){
//    console.log("Intervalo assíncrono")
//}, 3000);

console.log("Ainda não começou 2");


//3 - Promises
const promessa = Promise.resolve(5 + 5)

console.log("Algum codigo");

console.log("Outro codigo");