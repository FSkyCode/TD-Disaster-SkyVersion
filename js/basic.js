<script>
funcion redirigirHtml(ruta) {
 windows.location.href = ruta;
}

funcion abrirNuevaPag(ruta) {
 window.open(ruta);
}

document.getElementById("btnTails").addEventListener("click", function () { redirigirHtml("html/personajes/Tails.html"); }); 
</script>