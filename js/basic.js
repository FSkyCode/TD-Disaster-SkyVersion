// Variables

const Tails = document.getElementById("btnTails");
const Nya = document.getElementById("btnNya");

// Botones

Tails.addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html");
});

Nya.addEventListener("click", function () { redirigirHtml("html/personajes/Nya.html");
});

// Funciones

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}