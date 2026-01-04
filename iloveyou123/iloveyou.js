let fase = 0;

const textos = [
    "Aun con todo eso.",
    "Arriesgar todo es divertido y aterrador.",
    "Aun cuando pueda perderte, o acercarte mas, con eso...",
    "Tu",
    "quieres",
    "ser mi..."
];

const botones = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4"),
    document.getElementById("b5"),
    document.getElementById("b6")
];

const contenedor = document.getElementById("contenedor");
const contenedorPoemas = document.getElementById("poemas");
const final = document.getElementById("final");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        if (fase === index) {
            boton.textContent = textos[index];
            boton.disabled = true;
            fase++;

            // Última fase
            if (fase === botones.length) {
                setTimeout(() => {
                    contenedor.style.display = "none";
                    final.style.display = "flex";
                    contenedorPoemas.style.display = "none";
                }, 800);
            }
        }
    });
});

const poemas = document.querySelectorAll("#poema");

poemas.forEach((texto, index) => {
    setTimeout(() => {
        texto.classList.add("mostrar");
    }, index * 1200); // tiempo entre versos
});