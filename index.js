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

// a(b)

// a(function(){
//     console.log("test");
    
// })
// a(()=>{
//     console.log("ll");
    
// })

const C =(Callback)=>{
    console.log("i am c");
    Callback()
    
}
const D =()=>{
    console.log("i am d");
    
}

C(D)