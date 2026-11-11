function sumar(a: number, b :number) {
    return a + b;
}

const sumarizar = (a: number, b: number) => {
    return a + b;
}

console.log(sumar(3,4)); // esto representa una suma
console.log(sumarizar(3,4)); // la funcion lambda representa un comportamiento
const mostrarMensaje = () => {
    console.log("Mensaje");
}
function mostrarMensajesfuncion(){
    console.log("Mensaje");
}
mostrarMensaje(); // da como resultado mensaje
mostrarMensajesfuncion(); // mensaje
