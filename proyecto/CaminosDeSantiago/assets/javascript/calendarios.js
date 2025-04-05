
fetchjson()

function fetchjson(){
    fetch("../../assets/javascript/AJAX/fechas_calendario.json")
        .then(r => r.json())
        .then(jsonObj => verlista(jsonObj));
}

function verlista(jsonObj) {


    let lis="";
    let eventos=jsonObj.eventos

    eventos.sort(function (a,b){
        return new Date(a.fecha) - new Date(b.fecha)
    });
    let primerosEventos = eventos.slice(0, 4);

    for (const evento of primerosEventos) {
        let li=`<li class=\"${evento.tipo}\"><h2>${evento.nombre}</h2>`+
            `<p>Fecha: ${evento.fecha}</p><p><a href=\"${evento.enlace}\">Visitar</a></p>`+
    `</li>`;
        lis+=li;
    }

    document.getElementById("calendar-container").innerHTML=`<ul>${lis}</ul>`;
}