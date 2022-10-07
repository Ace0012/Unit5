const fs = require("fs");
const data  = require("./db.json")
console.log(post )
data.post.push({id:1,message:'New Post Request'})

// without sync

fs.watchFile("/")