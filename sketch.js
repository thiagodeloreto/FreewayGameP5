function setup() {
  createCanvas(500, 400);
  trilhaDoJogo.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro()
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function mostraCarro(){
  image(imagemDoCarro, xDoCarro, yDoCarro, comprimentoCarro, alturaCarro)
}

function movimentaCarro(){
  xDoCarro -= 2;
}








