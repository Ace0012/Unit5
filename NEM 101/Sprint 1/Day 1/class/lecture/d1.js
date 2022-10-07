console.log("hello")
const {sum,div,mul,sub} = require("./impExp")
const path = require("path");



console.log(sum(10,12));

console.log(sub(10,12));

console.log(mul(10,12));

console.log(div(10,12));
console.log(process.cwd())
console.log(path.join(process.cwd(),"..","assests"))
