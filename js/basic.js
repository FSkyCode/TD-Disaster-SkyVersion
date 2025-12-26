const Presionar = document.getElementById('A');

Presionar.addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html");
});

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}

alert("JS activo");