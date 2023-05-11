
fs.appendFile("python.html","obi is a boy/n",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("you have added to python.html")
    }

})
