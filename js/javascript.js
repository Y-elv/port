const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >10);
});

function hiddenColor(){
    document.getElementById("changer3").style.color='#ffb81e';
}
function changer(){
console.log('hello');
}
 const links= document.querySelectorAll('.navlist');
 links.forEach(link=>{
    link.addEventListener('click',changer);
 });
