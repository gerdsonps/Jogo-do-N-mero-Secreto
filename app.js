let listaDeNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function ExibirTexto (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function mensagemInicial () {
ExibirTexto('h1', 'Jogo do Número Secreto');
ExibirTexto('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial()

function verificarChute () {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';


    if (chute == numeroSecreto) {
        ExibirTexto('h1', 'Acertou!!');
        ExibirTexto('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else { if (chute > numeroSecreto) {
        ExibirTexto('p', `O número secreto é menor que ${chute}!`);
    } else {
        ExibirTexto('p', `O número secreto é maior que ${chute}!`);
    }
    tentativas++;
    limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
