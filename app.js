// ==============================
// Lista de amigos
// ==============================

// Cria um array vazio que vai guardar os nomes adicionados
let amigos = [];


// ==============================
// Função: adicionarAmigo
// ==============================
// Chamado quando o usuário clica no botão "Adicionar"
// Captura o nome do input, valida e adiciona na lista
function adicionarAmigo() {
   // Pega o campo de input pelo id="amigo"
   let inputAmigo = document.getElementById("amigo");

   // Captura o valor digitado e remove espaços extras do início/fim
   const nome = inputAmigo.value.trim();

   // Validação: se o campo estiver vazio, não deixa prosseguir
   if (nome === "") {
       alert("Por favor, insira o nome de um amigo.");
       return; // Sai da função
   }

   // Adiciona o nome válido no array amigos
   amigos.push(nome);

   // Limpa o input para o próximo nome
   inputAmigo.value = "";

   // Atualiza a lista exibida na tela
   exibirAmigos();
}


// ==============================
// Função: exibirAmigos
// ==============================
// Atualiza a <ul> ou <ol> com id="listaAmigos"
// Exibe todos os nomes armazenados no array "amigos"
function exibirAmigos() {
    // Seleciona a lista no HTML
    const lista = document.getElementById("listaAmigos");

    // Limpa os itens atuais antes de recriar
    lista.innerHTML = "";

    // Percorre o array de amigos e cria <li> para cada um
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria item da lista
        item.textContent = amigos[i];            // Define o texto
        lista.appendChild(item);                 // Adiciona no HTML
    }
}


// ==============================
// Função: sortearAmigo
// ==============================
// Sorteia aleatoriamente um amigo e cria o efeito de "roleta"
// com animação de troca rápida antes de parar no escolhido
function sortearAmigo() {
    // Validação: precisa de pelo menos 2 amigos para sortear
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Seleciona a div de resultado
    const resultadoDiv = document.getElementById("resultado");

    // Limpa qualquer texto/efeito anterior
    resultadoDiv.textContent = "";
    resultadoDiv.classList.remove("highlight");

    let i = 0; // Contador usado na roleta

    // Intervalo que troca os nomes rapidamente (efeito de "roleta")
    const intervalo = setInterval(() => {
        resultadoDiv.textContent = amigos[i % amigos.length]; // Exibe o próximo nome
        i++;
    }, 100); // Troca a cada 100ms

    // Para a roleta após 3 segundos e mostra o sorteado
    setTimeout(() => {
        clearInterval(intervalo); // Interrompe a troca

        // Escolhe um índice aleatório do array
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];

        // Mostra o nome final sorteado
        resultadoDiv.textContent = amigoSorteado;
        resultadoDiv.classList.add("highlight"); // Destaca com efeito CSS

        // Reproduz música de vitória
        tocarMusica();
    }, 3000); // Tempo da roleta = 3s
}


