

// var i=6;
 
// var start= setInterval(()=>{
//     document.getElementById("counter").innerHTML= i;
//     i--;
//     if(i==0)
//     clearInterval(start) 
// },600)






var i=0


var start=setInterval((()=>{
    document.write("8")
    i++
    if (i>10)
        clearInterval(start)
}),400)


