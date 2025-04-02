

//SACA LA LISTA DE FAVORITOS DEL LOCALSTORAGE, ES UN VECTOR DE NOMBRES CON LA CLAVE "favorites"
function getfavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

function checkfavorito(titulo){
    let favs=getfavoritos();
    return !!favs.includes(titulo);
}


//METE LA LISTA DE FAVORITOS AL LOCALSTORAGE
function setfavoritos(lista) {
    localStorage.setItem('favoritos', JSON.stringify(lista));
}

//FUNCION PARA TOGGLEAR UN FAVORITO
function togglefavorito(titulo,boton) {
    //sacamos los favoritos
    let favs = getfavoritos();

    if (favs.includes(titulo)) {
        favs = favs.filter(elm => elm !== titulo);
        boton.style.background="rgba(200, 200, 200, 80%)";
    } else {
        favs.push(titulo);
        boton.style.background="rgba(200, 200, 200, 20%)";
    }

    setfavoritos(favs);
}

function favappearance(){
    let boton=document.querySelector(".favorito");
    let title = boton.parentElement.querySelector("h1").textContent;
    if(checkfavorito(title)===true){
        boton.style.background="rgba(200, 100, 100, 50%)";
        boton.style.border="solid black 2px"
    }else{
        boton.style.background="rgba(200, 200, 200, 80%)";
        boton.style.border="none"
    }
}

document.addEventListener("DOMContentLoaded", function () {

    let boton=document.querySelector(".favorito");
    let title = boton.parentElement.querySelector("h1").textContent;

    favappearance();

    boton.addEventListener("click",function(){
       togglefavorito(title,boton);
        favappearance();
    });

});