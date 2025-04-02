
let showmode="all"
let eventos = document.querySelector(".filtrar-eventos");
let locales = document.querySelector(".filtrar-locales");
let platos = document.querySelector(".filtrar-platos");
let lugares = document.querySelector(".filtrar-lugares");

function tarjetamode(mode){

    let tarjetas =document.querySelectorAll(".tarjetas-favoritos article");
    let tarjetanula=null;
    let mostrados=0;
    eventos.style.backgroundColor="var(--piel)";
    locales.style.backgroundColor="var(--piel)";
    platos.style.backgroundColor="var(--piel)";
    lugares.style.backgroundColor="var(--piel)";
    for (const tarjeta of tarjetas) {
        if(tarjeta.className==="vacia"){tarjetanula=tarjeta}
        switch (mode) {
            case "eventos":{
                eventos.style.backgroundColor="rgb(180,160,142)";
                if(!(tarjeta.className==="un-evento" || tarjeta.className==="vacia")){
                    tarjeta.style.display="none";
                }else{
                    if(checkfavorito(tarjeta.querySelector("h3").textContent)===true){
                        tarjeta.style.display="block";
                        if(tarjeta.className!=="vacia"){mostrados++;}
                    }
                }
            }
                break;
            case "locales":{
                locales.style.backgroundColor="rgb(180,160,142)";
                if(!(tarjeta.className==="un-local" || tarjeta.className==="vacia")){
                    tarjeta.style.display="none";
                }else{
                    if(checkfavorito(tarjeta.querySelector("h3").textContent)===true){
                        tarjeta.style.display="block";
                        if(tarjeta.className!=="vacia"){mostrados++;}
                    }                }
            }
                break;
            case "platos":{
                platos.style.backgroundColor="rgb(180,160,142)";
                if(!(tarjeta.className==="un-plato" || tarjeta.className==="vacia")){
                    tarjeta.style.display="none";
                }else{
                    if(checkfavorito(tarjeta.querySelector("h3").textContent)===true){
                        tarjeta.style.display="block";
                        if(tarjeta.className!=="vacia"){mostrados++;}
                    }                }
            }
                break;
            case "lugares":{
                lugares.style.backgroundColor="rgb(180,160,142)";
                if(!(tarjeta.className==="un-lugar" || tarjeta.className==="un-itinerario" || tarjeta.className==="vacia")){
                    tarjeta.style.display="none";
                }else{
                    if(checkfavorito(tarjeta.querySelector("h3").textContent)===true){
                        tarjeta.style.display="block";
                        if(tarjeta.className!=="vacia"){mostrados++;}
                    }                }
            }
                break;
            default:
                if(checkfavorito(tarjeta.querySelector("h3").textContent)===true){
                    tarjeta.style.display="block";
                    if(tarjeta.className!=="vacia"){mostrados++;}
                }
                break;
        }
    }
    if(mostrados===0){
        tarjeta_nula(tarjetanula,"block");
    }else{
        tarjeta_nula(tarjetanula,"none");
    }
}

eventos.addEventListener("click",function (){
    if(showmode==="eventos"){
        showmode="all";
    }else{
        showmode="eventos";
    }
    tarjetamode(showmode);
});
locales.addEventListener("click",function (){
    if(showmode==="locales"){
        showmode="all";
    }else{
        showmode="locales";
    }
    tarjetamode(showmode);
});
lugares.addEventListener("click",function (){
    if(showmode==="lugares"){
        showmode="all";
    }else{
        showmode="lugares";
    }
    tarjetamode(showmode);
});
platos.addEventListener("click",function (){
    if(showmode==="platos"){
        showmode="all";
    }else{
        showmode="platos";
    }
    tarjetamode(showmode);
});


document.addEventListener("DOMContentLoaded", function () {

    loadDoc();

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

function eliminador(texto){
    if(texto!=="Vacío"){
        togglefavorito(texto);
        location.reload();
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

            let insertar = "";
            insertar += "<article class=" + clase + ">" +
                "<figure><img src=" + imagen_source + "alt=" + imagen_alt + "</figure>" +
                "<h3>" + titulo + "</h3>" +
                "<p>" + descripcion + "</p>" +
                "<nav class='iconos'>" +
                `<figure><img src=\"../assets/images/general/trash-01.svg\" alt=\"Eliminar\" onclick=\"eliminador('${titulo}')\"/></figure>` +
                "<figure><a href=" + enlaceplus + "><img src=\"../assets/images/general/pluscircle.svg\" alt=\"Ver más\"></a></figure>" +
                "</nav>" +
                "</article>";

            document.querySelector(".tarjetas-favoritos").insertAdjacentHTML("beforeend", insertar);


    }
    let activas=0;
    let tarjetanula=null;
    for (const tarjeta of document.querySelectorAll(".tarjetas-favoritos article")) {
        let titulo=tarjeta.querySelector("h3").textContent;
        if(titulo==="Vacío"){tarjetanula=tarjeta}
        if(checkfavorito(titulo)===false){
            tarjeta.style.display="none";
        }else{
            if(titulo!=="Vacío"){activas++;}
        }
    }
    if(activas===0){
        tarjeta_nula(tarjetanula,"block");
    }else{
        tarjeta_nula(tarjetanula,"none");
    }
}

function tarjeta_nula(tarjeta,state){
    tarjeta.style.display=state;
}

function checkfavorito(titulo){
    let favs=getfavoritos();
    return !!favs.includes(titulo);
}


//SACA LA LISTA DE FAVORITOS DEL LOCALSTORAGE, ES UN VECTOR DE NOMBRES CON LA CLAVE "favorites"
function getfavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

//METE LA LISTA DE FAVORITOS AL LOCALSTORAGE
function setfavoritos(lista) {
    localStorage.setItem('favoritos', JSON.stringify(lista));
}

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
