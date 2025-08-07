//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar a lista de amigos.
let amigos = [];

/**
 * Função para adicionar um amigo à lista.
 * É chamada pelo botão "Adicionar" no HTML.
 */
function adicionarAmigo() {
    // Pega a referência do campo de input e da lista de amigos na tela.
    const inputAmigo = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');

    const nomeAmigo = inputAmigo.value.trim(); // Pega o nome e remove espaços extras

    // 1. Valida se um nome foi digitado.
    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo!');
        return; // Para a execução da função
    }

    // 2. Valida se o nome já foi adicionado para evitar duplicados.
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        inputAmigo.value = ''; // Limpa o campo
        return;
    }

    // Adiciona o nome ao array de amigos.
    amigos.push(nomeAmigo);

    // Atualiza a lista visível na página.
    // Cria um novo elemento <li> para cada amigo adicionado.
    const novoAmigoElemento = document.createElement('li');
    novoAmigoElemento.textContent = nomeAmigo;
    lista.appendChild(novoAmigoElemento);

    // Limpa o campo de input para a próxima digitação.
    inputAmigo.value = '';
    inputAmigo.focus(); // Coloca o cursor de volta no campo de input
}

/**
 * Função para realizar o sorteio do amigo secreto.
 * É chamada pelo botão "Sortear amigo" no HTML.
 */
function sortearAmigo() {
    // Valida se há pelo menos 2 amigos na lista para o sorteio fazer sentido.
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    // Gera um índice aleatório para sortear um amigo.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Pega a referência da lista de resultados e exibe o amigo sorteado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}