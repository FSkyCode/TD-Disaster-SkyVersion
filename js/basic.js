// Variables

const Tails = document.getElementById("btnTails");
const Shadow = document.getElementById("btnShadow");

// Botones

Tails.addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html");
});

Shadow.addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html");
});

// Funciones

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}