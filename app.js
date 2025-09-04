let amigos = [];

function adicionarAmigo() {
   let InputAmigo = document.getElementById("amigo").value;

    if (InputAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }

    amigos.push(amigo);
    document.getElementById("amigo").value = "";
}