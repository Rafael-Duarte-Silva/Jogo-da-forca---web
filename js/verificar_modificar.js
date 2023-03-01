let input = "";
let input_registro = [];
let caracteres_validos = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÂÉÍÕÚÇÃÀÊÓÔÜ".toUpperCase().split('');

let input_cont = 0;
let erros_cont = 0;
let acertos_cont = 0;

let palavra_sorteada_padrao = palavra_sorteada.toUpperCase().split('');
palavra_sorteada = palavra_sorteada.toUpperCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "").split('');

console.log(input);
console.log(palavra_sorteada);

let terminou = false;

function teclado(letra){
  verificar(letra);
}

addEventListener("keypress", function(event){
  verificar(event.key.toUpperCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""));  
})

function verificar(letra){
  if(terminou == false){
    input = letra;
    
    if(caracteres_validos.filter(numero => input.includes(numero)) != false){

       if(input_registro.filter(numero => input.includes(numero)) == false){
          input_registro[input_cont] = input;
          input_cont++;

          if(palavra_sorteada.filter(numero => input.includes(numero)) == false){
            tecla_cor("black");

            erros_cont++;
          }  

          else{
            for(let i=0; i<palavra_sorteada.length; i++) {
              if(input[0].includes(palavra_sorteada[i]) == true){
                let modificar = document.getElementById("espacamentos_"+i);
                modificar.innerText = palavra_sorteada_padrao[i];
                modificar.style.marginBottom = "15vh";
                modificar.style.backgroundColor = "white";
                modificar.style.fontSize = "8vh";
                modificar.style.fontFamily = "'Roboto Mono', monospace";

                tecla_cor("green");

                redimensionar(i);

                acertos_cont++;
              }
            }
          }
        }

      else{
          tecla_repetida();
      }

      console.log(erros_cont);

      if(acertos_cont == palavra_sorteada.length){
        janela_final("Você Ganhou!");
        terminou = true;
      }

      else if(erros_cont < 6){
        this.document.getElementById("forca").setAttribute("src", "svg/forca_"+erros_cont+".svg");

        if(erros_cont == 5){
          janela_final("Você Perdeu!");

          for(let i=0; i<palavra_sorteada.length; i++) {
            let modificar = document.getElementById("espacamentos_"+i);
            modificar.innerText = palavra_sorteada_padrao[i];
            modificar.style.marginBottom = "15vh";
            modificar.style.backgroundColor = "white";
            modificar.style.fontSize = "8vh";
            modificar.style.fontFamily = "'Roboto Mono', monospace";

            redimensionar(i);
          }
          
          terminou = true;
        }
      }
    }   
  }
}