//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Função para adicionar amigos.
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeDoAmigo = inputAmigo.value.trim();

    //Não deixar o campo ficar vazio
    if(nomeDoAmigo===''){
        alert('Por favor, insira um nome');
        return;
    }
    //impedindo que o nome seja duplicado
    if(amigos.includes(nomeDoAmigo)){
        alert(`Esse nome ${nomeDoAmigo} já está sendo usado`);
        return;
    }
    //adiciona o nome na array principal
    amigos.push(nomeDoAmigo);
    //lmpa o campo onde se escreve o nome
    inputAmigo.value ='';
    //atualiza a lista
    atualizarLista();
}
//Atualiza a <ul> com todos os nomes armazenaos no array
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML ='';
    //Percorre o array e cria um <li> para cada amigo

    for (let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Sorteia um indice aleatório baseado no tamanho do array
function sortearAmigo(){
    if(amigos.length <2){
        alert('Não há amigos suficientes para sortear, adicione ao menos dois.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    //Exibe o resultado na div de 'resultado';
     const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
