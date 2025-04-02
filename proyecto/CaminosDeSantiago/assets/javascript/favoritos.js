
document.addEventListener("DOMContentLoaded", function () {
    //funcion de xml
    loadDoc();
    //listeners de los basureros
    let trashbuttons=document.querySelectorAll(".iconos figure img");
    for (const trashbutton of trashbuttons) {
        trashbutton.addEventListener("click",function(){
            alert(trashbutton.parentElement.parentElement.parentElement.children[1].textContent);
        });
    }
/*
    document.addEventListener('click', function(event) {
        // Check if the clicked element is inside a dynamically added card
        if (event.target.matches('.un-lugar')) {
            const h3 = event.target.querySelector('h3');
            if (h3) {
                alert(h3.textContent); // Get the text inside the h3
            }
        }
    });*/
});



function loadDoc() {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "../assets/javascript/AJAX/favoritables.xml", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    xhttp.send();

}
function alertador(texto){
    alert(texto);
}

function checknames(xmlDoc,abuscar){
    let shower = xmlDoc.getElementsByTagName("nombre")

    for (let j = 0; j < shower.length; j++) {
        let nombreTexto = shower[j].textContent.trim(); // Obtener el texto y eliminar espacios extra
        if (nombreTexto === abuscar) {
            return true;
        }
    }
}
function myFunction(xml) {

    let xmlDoc = xml.responseXML;
    let tarjetas = xmlDoc.getElementsByTagName("TARJETA");

    for (let i = 0; i < tarjetas.length; i++) {

        let clase = tarjetas[i].getElementsByTagName("class")[0].childNodes[0].nodeValue;
        let imagen_source = tarjetas[i].getElementsByTagName("src")[0].childNodes[0].nodeValue;
        let imagen_alt = tarjetas[i].getElementsByTagName("alt")[0].childNodes[0].nodeValue;
        let titulo = tarjetas[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        let descripcion = tarjetas[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;
        let enlaceplus = tarjetas[i].getElementsByTagName("enlaceplus")[0].childNodes[0].nodeValue;

        //if(checkfavorito(titulo)){
        if(checknames(xmlDoc,titulo)){
            let spectitle="\""+titulo+"\""
            let insertar = "";
            insertar += "<article class=" + clase + ">" +
                "<figure><img src=" + imagen_source + "alt=" + imagen_alt + "</figure>" +
                "<h3>" + titulo + "</h3>" +
                "<p>" + descripcion + "</p>" +
                "<nav class='iconos'>" +
                "<figure><img src=\"../assets/images/general/trash-01.svg\" alt=\"Eliminar\" onclick=\"alertador('paco')\"/></figure>" +
                "<figure><a href=" + enlaceplus + "><img src=\"../assets/images/general/pluscircle.svg\" alt=\"Ver más\"></a></figure>" +
                "</nav>" +
                "</article>";

            document.querySelector(".tarjetas-favoritos").insertAdjacentHTML("beforeend", insertar);
        }

    }
}





//SACA LA LISTA DE FAVORITOS DEL LOCALSTORAGE, ES UN VECTOR DE NOMBRES CON LA CLAVE "favorites"
function getfavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

//METE LA LISTA DE FAVORITOS AL LOCALSTORAGE
function setfavoritos(lista) {
    localStorage.setItem('favoritos', JSON.stringify(lista));
}

//FUNCION PARA TOGGLEAR UN FAVORITO
function togglefavorito(titulo) {
    //sacamos los favoritos
    let favs = getfavoritos();

    if (favs.includes(titulo)) {
        favs = favs.filter(elm => elm !== titulo);
    } else {
        favs.push(titulo);
    }

    setfavoritos(favs);
}

function checkfavorito(titulo){
    let favs=getfavoritos();
    return !!favs.includes(titulo);
}








