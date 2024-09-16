let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("cyan");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 14) {
    if (idade >= 16) {
      return "O Labirinto";
    } else {
      if (idade >= 5) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Howl's Moving Castle";          
        } else{
         return "Ponyo: Uma amizade que veio do mar";
        }
      } else {
        if (gostaDeFantasia) {
          return "Princesa Mononoke";
        } else {
          return "Neon Genesis Evangelion";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "Neon Genesis Evangelion";
    }
  }
}
