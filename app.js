// Cria um array vazio que vai guardar os nomes dos amigos
let amigos = [];

// Função chamada quando o usuário clica no botão "Adicionar"
function adicionarAmigo() {
   // Pega o input pelo id="amigo"
   let inputAmigo = document.getElementById("amigo");
   // Captura o valor digitado e remove espaços extras do início/fim
   const nome = inputAmigo.value.trim();

   // Validação: se o input estiver vazio, mostra um alerta e sai da função
   if (nome === "") {
       alert("Por favor, insira o nome de um amigo.");
       return;
   }

   // Adiciona o nome no array amigos
   amigos.push(nome);

   // Limpa o input para o próximo nome
   inputAmigo.value = "";

   // Atualiza a lista exibida na tela
   exibirAmigos();
}

// Função que exibe todos os amigos na lista (ul ou ol com id="listaAmigos")
function exibirAmigos() {
    // Seleciona o elemento da lista
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de recriá-la
    lista.innerHTML = "";

    // Percorre o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo <li> para cada amigo
        let item = document.createElement("li");
        // Define o texto do <li> como o nome do amigo
        item.textContent = amigos[i];
        // Adiciona o <li> dentro da lista
        lista.appendChild(item);
    }
}

// Função que sorteia aleatoriamente um amigo do array
function sortearAmigo() {
    // Validação: precisa ter pelo menos 2 amigos no array
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e (amigos.length - 1)
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o amigo correspondente a esse índice
    let amigoSorteado = amigos[indiceSorteado];

    // Mostra o resultado dentro do elemento com id="resultado"
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
