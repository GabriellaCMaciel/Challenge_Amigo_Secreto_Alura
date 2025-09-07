let amigos = [];

function adicionarAmigo() {
   let inputAmigo = document.getElementById("amigo");
   const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";

    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}