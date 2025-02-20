const titulo = document.getElementById("titulo");
const palabra = ("Drug Dictionary")
let indiceLetra = 0
let indicePalabra = 0, estaBorrando = false

let velocidadEscritura = 230
let velocidadBorrado = 150

function efectoMaquina() {

    titulo.classList.add("activo"); // Mostrar barra

if (!estaBorrando) {
    titulo.textContent = palabra.substring(0, indiceLetra + 1)
    indiceLetra++

    if (indiceLetra === palabra.length) {
        estaBorrando = true
        titulo.classList.remove("activo")
        setTimeout(efectoMaquina, 1500)
    } else {
       setTimeout(efectoMaquina, velocidadEscritura)
    }

} else {
    //Borrar
    titulo.textContent = palabra.substring(0, indiceLetra - 1)
    indiceLetra--

    if (indiceLetra === 0) {
        estaBorrando = false
        indicePalabra = (indicePalabra + 1) % palabra.length
    }
    setTimeout(efectoMaquina, velocidadBorrado)
}
}
efectoMaquina();


console.log(palabra)
//titulo.textContent = "a"

