

// var i=6;
 
// var start= setInterval(()=>{
//     document.getElementById("counter").innerHTML= i;
//     i--;
//     if(i==0)
//     clearInterval(start) 
// },600)






// var i=0


// var starti=setInterval((()=>{
//     document.write("8")
//     i++
//     if (i>10)
//         clearInterval(starti)
// }),400)



// var j=0

// var startj=setInterval((()=>{
//     document.write("7")
//     j++
//     if (i>8)
//         clearInterval(startj)
// }),300)



var k=8

var kx= setInterval(()=>{
    document.getElementById("counter").innerHTML= k ;
    k--
    if (k<=0)
        clearInterval(kx)
    
},1000)


function loop(){
    setTimeout(()=>{
        document.getElementById("star").innerHTML="stars"
        loop()
       },2000)
}

loop()

  
