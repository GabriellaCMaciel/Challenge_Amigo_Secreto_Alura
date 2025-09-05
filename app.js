let amigos = [];

function adicionarAmigo() {
   let InputAmigo = document.getElementById("amigo");
   const nome = InputAmigo.value.trim();

    if (InputAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";

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