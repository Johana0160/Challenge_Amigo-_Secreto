// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreSecreto = '';
let intentos = 0;
let listaNombresSorteados = [];
let nombres = ["Ana", "Luis", "Carlos", "Maria", "Pedro", "Sofia", "Miguel", "Lucia", "Jorge", "Elena"];
console.log(nombres);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let nombreDeUsuario = document.getElementById('valorUsuario').value;
    
    if (nombreDeUsuario === nombreSecreto) {
        asignarTextoElemento('p', `Acertaste el nombre en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        asignarTextoElemento('p', 'El nombre no es correcto, intenta nuevamente');
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNombreSecreto() {
    let indiceGenerado = Math.floor(Math.random() * nombres.length);
    let nombreGenerado = nombres[indiceGenerado];

    console.log(nombreGenerado);
    console.log(listaNombresSorteados);
    
    if (listaNombresSorteados.length == nombres.length) {
        asignarTextoElemento('p', 'Ya se sortearon todos los nombres posibles');
    } else {
        if (listaNombresSorteados.includes(nombreGenerado)) {
            return generarNombreSecreto();
        } else {
            listaNombresSorteados.push(nombreGenerado);
            return nombreGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del Amigo Secreto!');
    asignarTextoElemento('p', `Indica un nombre de la lista: ${nombres.join(', ')}`);
    nombreSecreto = generarNombreSecreto();
    intentos = 1;
    console.log(nombreSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
