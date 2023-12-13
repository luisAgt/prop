window.onload =function(){
    alert("Encuentra los botones ocultos. pista debajo del texto");
}

document.addEventListener('DOMContentLoaded', function() {
    var sound1 = document.getElementById("sound1");
    var btnReproducir = document.getElementById("btnInicio");

    btnReproducir.addEventListener('click', function(){
        sound1.play();
    });
});

function abrirD1(){
    document.getElementById("d1").style.display = "block";
    document.getElementById("index").style.display = "none";

}

function abrirD2(){
    document.getElementById("d2").style.display = "block";
    document.getElementById("d1").style.display = "none";
}

function abrirD3(){
    document.getElementById("d3").style.display = "block";
    document.getElementById("d2").style.display = "none";
}

function abrirD4(){
    document.getElementById("d3").style.display = "none";
    document.getElementById("d4").style.display = "block";
    document.getElementById("back2").style.display = "block";
    document.getElementById("back1").style.display = "none";
}

function abrirD5(){
    document.getElementById("d4").style.display = "none";
    document.getElementById("d5").style.display = "block";
}