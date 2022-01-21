function naturePlay() {
    nature.play();
}

function lluviaPlay() {
    lluvia.play();
}

function marPlay() {
    mar.play();
}

function maullidoPlay() {
    maullido.play();
}
function iniciar() {
    boton1 = document.getElementById('boton1');
    boton2 = document.getElementById('boton2');
    boton3 = document.getElementById('boton3');
    boton4 = document.getElementById('boton4');


    nature = document.getElementById('nature');
    lluvia = document.getElementById('lluvia');
    mar = document.getElementById('mar');
    maullido = document.getElementById('maullido');


    boton1.addEventListener('click', naturePlay);
    boton2.addEventListener('click', lluviaPlay);
    boton3.addEventListener('click', marPlay);
    boton4.addEventListener('click', maullidoPlay);
}

window.addEventListener('load', iniciar, false); // Preguntar para que es esto
