//se extrae el ul con los botones clicables, con el children se sacan cada uno de los li hijos
const botones_ul = document.querySelector('.extras-botones ul');
const botones_li = botones_ul.children;

//se rellena el texto de la pantalla con un mensaje de placeholder hasta que se clique algo
document.querySelector(".extra-contenido").firstElementChild.textContent = "Selecciona una opción para continuar"

//obtiene si hay algun mensaje en la url, de haberlo ejecuta opcionclicada para la opcion seleccionada
const urlParams = new URLSearchParams(window.location.search);
const message=urlParams.get("msg");
if (message) {
    opcionclicada(message);
}

//se define cada uno de los posibles enlaces a usar
let link1 = "https://playpager.com/embed/checkers/index.html";
let link2 = "https://emulatoros.github.io/angrybirdschrome-source-html5/";
let link3 = "https://minecrafttopvaz.github.io/go/minecraft-1.5.2/";
let link4 = "http://slither.com/io";
let link5 = "https://fritz.chessbase.com";


/*_____________________FUNCIONES___________________*/

//chequea si estamos conectados a internet
async function checkConexion() {
    try {
        const response = await fetch("https://th.bing.com/th/id/OIP.W65e6yHYVkJPaQKo3NJ_QQHaEo?rs=1&pid=ImgDetMain", {cache: "no-store"});
        return response.ok;
    } catch {
        return false;
    }
}

//funcion en caso de que haya conexion para poner el enlace correcto
function hay_conexion(lielm) {
    let frame = document.querySelector('iframe');
    frame.style.display = "flex"
    document.querySelector(".extra-contenido").firstElementChild.style.display = "none"
    switch (lielm) {
        case "Extra 1":
            frame.src = link1
            break;
        case "Extra 2":
            frame.src = link2
            break;
        case "Extra 3":
            frame.src = link3
            break;
        case "Extra 4":
            frame.src = link4
            break;
        case "Extra 5":
            frame.src = link5
            break;
        default:
            frame.src = link1
            break;

    }
}

//deberia ejecutarse en cuanto cliquemos un botón o entremos a la pagina desde un link especial
async function opcionclicada(lielm) {
    document.querySelector(".extra-contenido").firstElementChild.style.display = "flex";
    document.querySelector('iframe').style.display = "none";
    document.querySelector(".extra-contenido").firstElementChild.textContent = "Cargando...";

    const conectado = await checkConexion();
    if (conectado === true) {
        hay_conexion(lielm);
    } else {
        sin_conexion();
    }
}


//funcion en caso de que no haya conexion
function sin_conexion() {
    document.querySelector(".extra-contenido").firstElementChild.style.display = "flex";
    document.querySelector('iframe').style.display = "none";
    document.querySelector(".extra-contenido").firstElementChild.textContent = "¡No estás conectado a internet!";
}

for (const lielm of botones_li) {
    lielm.addEventListener("click", async () => {
        await opcionclicada(lielm.textContent)
    });
}






