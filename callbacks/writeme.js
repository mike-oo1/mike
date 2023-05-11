const fs=require ("fs")
fs.writeFile("python.html","welcome to the curve Africa powered by Kora    ",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("you have successfully written to python.html")
    }
})
