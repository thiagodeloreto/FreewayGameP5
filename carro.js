//variáveis do carro

let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [45, 100, 155, 215, 275, 323];
let velocidadeCarros = [2, 3, 3.4, 5, 3.3, 2.5];
let comprimentoCarro = 40;
let alturaCarro = 30;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    xCarros[i] -= velocidadeCarros[i];

  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i = i+1){
    if (passouPelaTela(xCarros[i])) {
      xCarros[i] = 550;
    }
  }
}

function passouPelaTela(xCarros){
  return xCarros < -50;
}