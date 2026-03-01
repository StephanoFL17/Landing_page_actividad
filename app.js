const imagenes = [
  "./imagenes/image-experiencias.webp",
  "./imagenes/sala_de_estar.webp",
  "./imagenes/sala_de_estar_2.webp",

];

const botonSiguiente = document.querySelector('.boton-siguiente')
const botonAnterior = document.querySelector('.boton-anterior')
const imagen = document.querySelector('.imagen-carrusel')

let imagenActual = 0

botonAnterior.addEventListener('click', function() {

  imagenActual = imagenActual - 1

  if (imagenActual <= -1) {
    imagenActual = imagenes.length - 1
  }

  imagen.src = imagenes[imagenActual]

})

botonSiguiente.addEventListener('click', function() {

  imagenActual = imagenActual + 1

  if (imagenActual > imagenes.length - 1) {
    imagenActual = 0
  }

  imagen.src = imagenes[imagenActual]

})