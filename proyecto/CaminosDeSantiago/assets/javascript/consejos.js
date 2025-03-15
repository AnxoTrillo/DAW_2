document.addEventListener("DOMContentLoaded", function() {
    //obtener todas las imágenes de pizza
    const imagenesBoton = document.getElementsByName('Boton');

    //iterar sobre cada imagen de pizza
    imagenesBoton.forEach(function(imgBoton) {
        //agregar evento de clic a cada imagen
        imgBoton.addEventListener('click', function() {
            //obtener el contenedor padre de la imagen (consejo-container)
            const consejoContainer = imgBoton.parentNode;
            // obtener todos los elementos <p> dentro del contenedor consejo-container
            const parrafos = consejoContainer.getElementsByTagName('p');

            //iterar sobre los elementos <p> obtenidos
            for (let i = 0; i < parrafos.length; i++) {
                const parrafo = parrafos[i];
                //verificar si el párrafo está visible u oculto
                if (parrafo.style.display !== 'none') {
                    //si está visible, ocultarlo
                    parrafo.style.display = 'none';
                } else {
                    //si está oculto, mostrarlo
                    parrafo.style.display = 'block';
                }
            }
        });
    });
});