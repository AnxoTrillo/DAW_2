
//SACA LA LISTA DE FAVORITOS DEL LOCALSTORAGE, ES UN VECTOR DE NOMBRES CON LA CLAVE "favorites"
function getfavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
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


document.addEventListener("DOMContentLoaded", function () {

    let boton=document.querySelector(".favorito");
    let title = boton.parentElement.querySelector("h1").textContent;
    boton.addEventListener("click",function(){
       togglefavorito(title,boton);
       alert(getfavoritos());
    });

});