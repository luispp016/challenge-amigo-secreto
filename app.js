// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let amigoSorteado = '';


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigoIngresado = (document.getElementById('amigo').value);

    if (amigoIngresado === '') {
        alert('Debes ingresar un nombre');
    } else if (amigoIngresado.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
    } else if (/\d/.test(amigoIngresado)) {
        alert('El nombre no debe contener números');
    } else if (listaAmigos.includes(amigoIngresado)) {
        alert('El nombre ya fue ingresado');
    } else {
        listaAmigos.push(amigoIngresado);
        limpiarCampo();
        asignarTextoElemento('#listaAmigos', listaAmigos.join(', '));
    }

}

function sortearAmigo() {

    if (listaAmigos.length < 2) {
        alert('Debes ingresar al menos 2 amigos');
    } else {
        let sorteo = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[sorteo];
        limpiarLista();
        let mensajeResultado = `El amigo secreto es: ${amigoSorteado}`;
        asignarTextoElemento('#resultado', mensajeResultado);
    }
        
}

function limpiarLista() {
    asignarTextoElemento('#listaAmigos', '');
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}