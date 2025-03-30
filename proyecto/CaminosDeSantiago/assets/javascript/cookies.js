document.addEventListener("DOMContentLoaded", () => {
    const aceptarBtn = document.getElementById("aceptarCookies");
    const rechazarBtn = document.getElementById("rechazarCookies");
    const seccionBotones = document.querySelector(".botones");

    const gestionarCookies = () => {
        seccionBotones.innerHTML = `<p>Tu configuración de cookies ha sido guardada correctamente.</p>`;
    };

    aceptarBtn.addEventListener("click", () => gestionarCookies());
    rechazarBtn.addEventListener("click", () => gestionarCookies());
});
