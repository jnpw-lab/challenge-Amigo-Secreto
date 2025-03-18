
let nombresAmigos = [];


function agregarAmigo() {

   let amigoDeUsuario = document.getElementById ("amigo").value;

   if (amigoDeUsuario === "") {
    alert ("Por favor, inserte un nombre.");

   } else {
        nombresAmigos.push (amigoDeUsuario);
        limpiarInput ();
        actualizarListaDeAmigos();
   }
    return;
}

function limpiarInput () {
    let textoInput = document.getElementById ("amigo").value = "";
}


function actualizarListaDeAmigos () {
    let ubicacionAmigosHTML = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement ("li");
        li.textContent = (nombresAmigos[i]);
        ubicacionAmigosHTML.appendChild(li);
    }
}


function sortearAmigo() {
    listaAmigos.innerHTML = "";
    if (nombresAmigos.length > 0) {
        const indiceAmigoSecreto = Math.floor(Math.random() * nombresAmigos.length);
        const amigoSorteado = nombresAmigos[indiceAmigoSecreto];
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
        nombresAmigos.length = 0;
    } else {
        alert ("Por favor ingrese los nombres de sus amigos.");

    }
}