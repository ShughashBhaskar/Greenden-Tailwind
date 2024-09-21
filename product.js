var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
var x = document.getElementById("x")

menu.addEventListener("click",function(){
    sidenav.style.right="0%"
})
x.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var search = document.getElementById("search")
var productlist = document.getElementById("container")
var product = productlist.querySelectorAll("div")


 search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase();
    for(var i = 0;i<product.length;i++){
         var productname = product[i].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            product[i].style.display ="none"
        }else{
            product[i].style.display ="block"
        }
    }
 })
