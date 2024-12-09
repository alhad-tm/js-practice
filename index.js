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


const posts=[
    {id:1,title:"introduction"},
    {id:2,title:"chapter 1"}
]

const getPosts=()=>{
    let lis=""
    setTimeout(()=>{
        posts.forEach(post=>{
            lis+= `<li> ${post.id} - ${post.title} </li> `
        })
        document.getElementById("postlist").innerHTML=lis;

    },1000)
    
}




const addPost=(post,callback)=>{

    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

   

}

addPost(
    {id:3,title:"chapter 2"}
,getPosts)





