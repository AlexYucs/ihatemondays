//const express = require('express')

console.log("stuff")
let num = [1,3,2,3,22]
console.log(num.sort((a,b)=>a>b?1:b>a?-1:0))

let evens = num.filter((a)=>a%2==0)
console.log(evens)
