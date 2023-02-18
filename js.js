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

for(let i = 0; i < palavra.length; i++){
  let espacamentos = document.createElement('div');
  espacamentos.setAttribute("id", "espacamentos"+i);
  espacamentos.style.width = "6vh";
  espacamentos.style.height = "0.7vh";
  espacamentos.style.marginLeft = "2vh";
  espacamentos.style.marginTop = "10vh";
  espacamentos.style.backgroundColor = "black";
  document.getElementById("jogo").appendChild(espacamentos);
}

var tecla;

addEventListener("keypress", function(event){
  tecla = event.key;

  let split = palavra.split('');
  let comparar = tecla;
  console.log(comparar);
  console.log(split);

  for(let i=0; i<comparar.length; i++) {
    for(let n=0; n<split.length; n++) {
      if(comparar[i].includes(split[n]) == true){
        let modificar = document.getElementById("espacamentos"+n);

        modificar.innerText = split[n];
        modificar.style.marginTop = "5vh";
        modificar.style.marginLeft = "2vh";
        modificar.style.backgroundColor = "white";
        modificar.style.fontSize = "4vh"
      }
    }
  }
})

