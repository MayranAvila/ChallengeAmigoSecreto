// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }

    let copiaAmigos = [...amigos];
    let asignaciones = {};

    amigos.forEach(amigo => {
        let posibles = copiaAmigos.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            sortearAmigo();
            return;
        }

        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = seleccionado;
        copiaAmigos = copiaAmigos.filter(a => a !== seleccionado);
    });

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultado.appendChild(li);
    }
}
