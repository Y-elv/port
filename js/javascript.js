const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >10);
});




console.log("hello")
function show(){
    document.getElementById("hidden-menu").style.display="block";
    document.getElementById("menu-icon").style.display="none";
}
function hiden(){
    console.log("hello")
    document.getElementById("hidden-menu").style.display="none";
    document.getElementById("menu-icon").style.display="block";
}