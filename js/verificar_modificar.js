let input = "";
let input_registro = [];
const caracteres_validos = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÂÉÍÕÚÇÃÀÊÓÔÜ".toUpperCase().split('');

let input_cont = 0;
let erros_cont = 0;
let acertos_cont = 0;

let palavra_sorteada_desacentuada = palavra_sorteada.toUpperCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "").split('');
palavra_sorteada.toUpperCase();

let terminou = false;

function teclado(letra){
  verificar(letra);
}

addEventListener("keypress", function(event){
  verificar(event.key);  
})

function verificar(letra){
  input = letra.toUpperCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

  if(terminou == false && caracteres_validos.filter(numero => input.includes(numero)) != false){
    if(input_registro.filter(numero => input.includes(numero)) == false){
      input_registro[input_cont] = input;
      input_cont++;

      let acertou = false;

      for(let i=0; i<palavra_sorteada.length; i++){
        if(input.includes(palavra_sorteada_desacentuada[i]) == true){
          const modificar = document.getElementById("espacamentos_"+i);
          modificar.innerText = palavra_sorteada[i];
          modificar.style.marginBottom = "15vh";
          modificar.style.backgroundColor = "white";
          modificar.style.fontSize = "8vh";
          modificar.style.fontFamily = "'Roboto Mono', monospace";
          modificar.style.color = "green";

          tecla_cor("green");
          
          acertos_cont++;
          acertou = true;
        }
      }

      if(acertou == false){
        tecla_cor("black");
        erros_cont++;
      }

      redimensionar();
    }  

    else{
      tecla_repetida();
    }

    if(acertos_cont == palavra_sorteada.length){
      janela_final("Você Ganhou!");
      terminou = true;
    }

    else{
      this.document.getElementById("forca").setAttribute("src", "imagens/svg/forca_"+erros_cont+".svg");

      if(erros_cont == 6){
        janela_final("Você Perdeu!");

        for(let i=0; i<palavra_sorteada.length; i++){
          if(document.getElementById("espacamentos_"+i).innerText == false){
            const modificar = document.getElementById("espacamentos_"+i);
            modificar.innerText = palavra_sorteada[i];
            modificar.style.marginBottom = "15vh";
            modificar.style.backgroundColor = "white";
            modificar.style.fontSize = "8vh";
            modificar.style.fontFamily = "'Roboto Mono', monospace"; 
          }
        }

        redimensionar(); 
        terminou = true;
      }
    }
  }   
}
