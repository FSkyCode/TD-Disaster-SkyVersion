// Variables

const Almanaque = document.getElementById("btnAlmanaque");
const Dibujos = document.getElementById("btnDibujos");

// Botones

Almanaque.addEventListener("click", function () { redirigirHtml("html/opciones/almanaque.html");
});

Dibujos.addEventListener("click", function () { redirigirHtml("html/opciones/dibujos.html");
});


// Funciones

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}