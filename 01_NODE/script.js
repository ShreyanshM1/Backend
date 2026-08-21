// let n = 5;
// for(let i = 1;i<=n;i++){
//   console.log("hello, ",i);
// }

// console.log("bye!!");

// let args = process.argv;
// for(let i = 2;i<args.length;i++){
//   console.log("hello to ",args[i]);
// }

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2, 3));
// console.log(math.PI);

// const info = require("./Fruits");
// // console.log(info[0].name);
// console.log(info);

//import
import { sum, PI } from "./math.js";
import { generate } from "random-words";
console.log(generate());
console.log(PI);
console.log(sum(1, 2));
