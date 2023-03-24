const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >10);
});
console.log("hello elvis")


document.querySelector("#btnn").style.dispaly="none"
let btn=document.getElementById("btnn")
let x=document.getElementsByClassName("tog")

btn.addEventListener('click',()=>{
    if(x.style.dispaly==='none'){
        x.style.dispaly='block';
    }
    else{
        x.style.dispaly='none';
    }

})
