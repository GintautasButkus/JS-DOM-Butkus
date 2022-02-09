let text = document.querySelector(".text");
let body = document.querySelector("body");
let field = document.querySelector(".field");

function getColor(){
    return 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
}

text.addEventListener("mouseover", function(){
    text.style.color = getColor();
});

field.addEventListener("keydown", function(){
    body.style.backgroundColor = getColor();
});

field.addEventListener("focus", function(){
    field.style.boxShadow=" 6px 17px 81px -7px rgba(0,0,0,1)";
});

body.addEventListener("focusout", function(){
    field.style.boxShadow="none";
});

