const tema_h1 = document.getElementById("tema").innerText;
let palavra_sorteada = "";
const temas = {
    animais: ["gato", "cachorro", "leão", "tigre", "elefante", "cobra", "macaco", "cavalo", "foca", "galinha", "jacaré", "lobo", "peru", "rato", "urubu", "vaca", "zebra"],
    frutas: ["maçã", "banana", "abacaxi", "laranja", "morango", "amora", "côco", "goiaba", "jaca", "limão", "laranja", "melão", "pera", "uva", "abacate", "caju", "cereja"],
    países: ["brasil", "portugal", "espanha", "méxico", "argentina", "alemanha", "egito", "frança", "itália", "rússia", "chile", "dinamarca", "canadá", "índia"],
  };

const tema_sorteado = Object.keys(temas)[Math.floor(Math.random() * Object.keys(temas).length)];
palavra_sorteada = temas[tema_sorteado][Math.floor(Math.random() * temas[tema_sorteado].length)];

document.getElementById("tema").innerText = tema_h1+" "+tema_sorteado;