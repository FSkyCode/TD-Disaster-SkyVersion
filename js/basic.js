// Variables

const Almanaque = document.getElementById("btnAlmanaque");
const Dibujos = document.getElementById("btnDibujos");

// Botones

Almanaque.addEventListener("click", function () { redirigirHtml("html/opciones/Almanaque.html");
});

Dibujos.addEventListener("click", function () { redirigirHtml("html/opciones/Dibujos.html");
});


// Funciones

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}