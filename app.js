// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; //Array para almacenar los nombres de los amigos
let amigoSorteado = ''; //Variable para almacenar el amigo sorteado

// Función para asignar texto a un elemento HTML por su ID, esta función hace lo mismo que la indicación document.getElementById(elementoId).innerHTML = texto;
function asignarTextoElemento(elementoId, texto) {
    let elementoHTML = document.getElementById(elementoId);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada y eliminar espacios al inicio y al final
    let amigoIngresado = (document.getElementById('amigo').value).trim();
    // Convertir la primera letra a mayúscula y el resto a minúscula
    amigoIngresado = primeraMayuscula(amigoIngresado);

// Validaciones de entrada
    if (amigoIngresado === '') {
        alert('Por favor, inserte un nombre.');
    } else if (amigoIngresado.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
    } else if (/\d/.test(amigoIngresado)) {
        alert('El nombre no debe contener números');
    } else if (/ {2,}/.test(amigoIngresado)) {
        alert('El nombre no debe contener más de un espacio consecutivo');
    } else if (amigos.includes(amigoIngresado)) {
        alert('El nombre ya fue ingresado');
        limpiarCampo();
    } else {
         // Actualizar el array de amigos
        amigos.push(amigoIngresado);
        // Limpiar el campo de entrada
        limpiarCampo();
        // Actualizar la lista de amigos
        actualizarLista();
    }

}

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Limpiar la lista existente, esta funcion hace lo mismo que la indicacion lista.innerHTML = '';
    limpiarLista();

    let listaAmigos = '';
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos += `<li>${amigos[i]}</li>`;
    }
    asignarTextoElemento('listaAmigos', listaAmigos);
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Debes ingresar al menos 1 amigo');
    }
    // Validar que haya al menos 2 amigos para poder sortear
    else if (amigos.length < 2) {
        alert('Debes ingresar al menos 2 amigos');
    } else {
        // Generar un índice aleatorio para seleccionar un amigo
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        // Obtener el nombre sorteado
        amigoSorteado = amigos[indiceSorteado];
        // Limpiar la lista existente para mostrar el amigo sorteado
        limpiarLista();
        // Mostrar el amigo sorteado
        let mensajeResultado = `El amigo secreto es: ${amigoSorteado}`;
        asignarTextoElemento('resultado', mensajeResultado);
    }
        
}

// Función para convertir la primera letra de un nombre a mayúscula y el resto a minúscula
function primeraMayuscula(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para limpiar la lista de amigos en la interfaz
function limpiarLista() {
    asignarTextoElemento('listaAmigos', '');
}

// Función para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}