var menu = document.querySelector("#menu");
var li = document.querySelectorAll("li");
menu.addEventListener("click", function(){
    for(var i=0;i<li.length;i++){
        li[i].classList.toggle("menu-active");
    }
})

document.addEventListener("scroll", function(){
    for(var i=0;i<li.length;i++){
        li[i].classList.remove("menu-active");
    }
})