// Variables

const Tails = document.getElementById("btnTails");
const Nya = document.getElementById("btnNya");
const UmbrellaFight = document.getElementById("btnUmbrellaFight");

// Botones

Tails.addEventListener("click", function () { redirigirHtml("/html/personajes/Tails.html");
});

Nya.addEventListener("click", function () { redirigirHtml("/html/personajes/Nya.html");
});

UmbrellaFight.addEventListener("click", function () { redirigirHtml("/html/personajes/UmbrellaFight.html");
});


// Funciones

function redirigirHtml(ruta) {
    window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
    window.open(ruta);
}