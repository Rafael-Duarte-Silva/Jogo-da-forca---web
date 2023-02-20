const tema_texto = document.getElementById("tema").innerText;
let palavra = "";
const temas = {
    animais: ["gato", "cachorro", "leão", "tigre", "elefante"],
    frutas: ["maçã", "banana", "abacaxi", "laranja", "morango"],
    países: ["brasil", "portugal", "espanha", "méxico", "argentina"],
  };

const tema = Object.keys(temas)[Math.floor(Math.random() * Object.keys(temas).length)];
palavra = temas[tema][Math.floor(Math.random() * temas[tema].length)];

document.getElementById("tema").innerText = tema_texto+" "+tema;