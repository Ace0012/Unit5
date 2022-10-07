
// read file

const fs  = require("fs");
// non - blocking 
console.log("before-1")
fs.readFile("./Ace.txt","utf-8",(err,data)=>console.log(data))
console.log("after-1")


// blocking 
console.log("before-2")
const data =fs.readFileSync("./Ace.txt","utf-8")
console.log("data-2",data)


console.log("after-2")
