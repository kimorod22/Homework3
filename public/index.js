function toTop(){
    window.scrollTo(0,0);
}

var p = document.getElementById("sizeChange");

function toLarge(){   
    p.style.fontSize = 20 + "pt";
}

function toMedium(){
    p.style.fontSize = 14 + "pt";
}

function toSmall(){
    p.style.fontSize = 8 + "pt";
}