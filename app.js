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