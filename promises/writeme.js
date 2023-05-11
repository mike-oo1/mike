const fs = require("fs").promises;
fs.writeFile("./python.html","michael is the boss")
.then(()=>{
    console.log("you have written successfully")
})
.catch((err)=>{
    console.log(err)
})
fs.unlink("python.html")

// const fs=require("fs").promises
// const mike =fs.writeFile("kkk.pdf","mike is a nice guy\n")

// .then(()=>{
//     console.log("done")
// })
// .catch((err)=>{
//     console.log(err)
// })
// console.log(mike)

const fs=require("fs")
fs.createReadStream("./okpoko.pdf").on("data",(chunk)=>{

    console.log(chunk)
    // console.log(chunk.toString())
})
