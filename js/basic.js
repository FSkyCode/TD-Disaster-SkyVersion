const Presionar = document.getElementById('A');

Presionar.addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html");
});

function redirigirHtml(ruta) {
    window.location.href = ruta;
    alert("SI VES ESTO, EL JS FUNCIONA");
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}