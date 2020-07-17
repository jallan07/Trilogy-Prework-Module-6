document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "330px";
    document.getElementById("box").style.borderRadius = "0px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".35";

});

document.getElementById("shrinkBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "50px";
    document.getElementById("box").style.width = "50px";
    document.getElementById("box").style.borderRadius = "0px";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.borderRadius = "0px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});