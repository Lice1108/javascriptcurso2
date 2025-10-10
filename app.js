let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//Código omitido

if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} tentativas!`;
        exibirTextoNaTela('p', 'Você descobriu o número secreto com 5 tentativas!');
        } else {
                        if (chute > numeroSecreto) {
                                        exibirTextoNaTela('p', 'O número secreto é menor');
                        } else {
                                        exibirTextoNaTela('p', 'O número secreto é maior');
                        }
        }
}