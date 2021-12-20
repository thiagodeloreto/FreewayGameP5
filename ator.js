//variáveis do ator
let yDoAtor = 366;
let xDoAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xDoAtor, yDoAtor, 30, 30)
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    yDoAtor -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)){
  if (podeSeMover()){
   yDoAtor += 5;
   }  
  }
  
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xDoAtor, yDoAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
    if (verificarPontosMaiorQueZero()){
      meusPontos -= 1;      
      }  
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yDoAtor = 366;
}

function incluiPontos(){
  fill(color(255, 240, 60));
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  text(meusPontos, 150, 27);
}

function marcaPonto(){
  if (yDoAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();    
  }
}

function verificarPontosMaiorQueZero(){
 return meusPontos > 0;
}

function podeSeMover(){
  return yDoAtor < 366
}
