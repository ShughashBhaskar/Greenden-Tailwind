var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
var x = document.getElementById("x")

menu.addEventListener("click",function(){
    sidenav.style.right="0%"
})
x.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
