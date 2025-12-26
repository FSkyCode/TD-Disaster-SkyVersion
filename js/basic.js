<script>
function redirigirHtml(ruta) {
 window.location.href = ruta;
}

function abrirNuevaPag(ruta) {
 window.open(ruta);
}

document.getElementById("btnTails").addEventListener("click", function () { redirigirHtml("../html/personajes/Tails.html"); }); 
</script>