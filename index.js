//callback


const Ar=()=>{
    console.log("i am a");
    
}



function a(callback){
    console.log("I am A")
    callback()
}
function b(){
    console.log("I am B")
}

a(b)

// a(function(){
//     console.log("test");
    
// })
// a(()=>{
//     console.log("ll");
    
// })