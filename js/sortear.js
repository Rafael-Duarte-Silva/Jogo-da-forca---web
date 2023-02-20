const tema_h1 = document.getElementById("tema").innerText;
let palavra_sorteada = "";
const temas = {
    animais: ["gato", "cachorro", "leão", "tigre", "elefante"],
    frutas: ["maçã", "banana", "abacaxi", "laranja", "morango"],
    países: ["brasil", "portugal", "espanha", "méxico", "argentina"],
  };

const tema_sorteado = Object.keys(temas)[Math.floor(Math.random() * Object.keys(temas).length)];
palavra_sorteada = temas[tema_sorteado][Math.floor(Math.random() * temas[tema_sorteado].length)];

document.getElementById("tema").innerText = tema_h1+" "+tema_sorteado;