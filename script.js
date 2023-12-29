function jornadaDoHeroi(posicaoInicial, totaldePassos) {
  let posicaoAtual = posicaoInicial;

  for (let passos = 1; passos <= totaldePassos; passos++) {
    const decisaoDoHeroi = Math.floor(Math.random() * 3) - 1;

    posicaoAtual += decisaoDoHeroi;

    posicaoAtual = Math.max(-10, Math.min(10, posicaoAtual));
  }
  return posicaoAtual;
}

const posicaoInicial = 0;
const totaldePassos = 10; // Alterei o total de passos para 10, você pode ajustar conforme necessário

var posicaoFinal = jornadaDoHeroi(posicaoInicial, totaldePassos);

console.log(`Posicao final do Heroi é ${posicaoFinal}`);
