let input = "";
let input_registro = [];

let input_cont = 0;
let erros_cont = 0;
let acertos_cont = 0;

palavra_sorteada = palavra_sorteada.toUpperCase().split('');
console.log(input);
console.log(palavra_sorteada);

addEventListener("keypress", function(event){
    input = event.key.toUpperCase();

    if(input == " "){

    }

    else if(input_registro.filter(numero => input.includes(numero)) == false){
        input_registro[input_cont] = event.key.toUpperCase();
        input_cont++;
        
        if(palavra_sorteada.filter(numero => input.includes(numero)) == false){
          tecla_errada();
          erros_cont++;
        }  

        else{
          for(let i=0; i<palavra_sorteada.length; i++) {
            if(input[0].includes(palavra_sorteada[i]) == true){
              let modificar = document.getElementById("espacamentos_"+i);
    
              modificar.innerText = palavra_sorteada[i];
              modificar.style.marginBottom = "15vh";
              modificar.style.backgroundColor = "white";
              modificar.style.fontSize = "8vh";
              modificar.style.fontFamily = "'Roboto Mono', monospace";
              acertos_cont++;
              tecla_certa();
            }
          }
        }
    }

    else{
        tecla_repetida();
    }

    console.log(erros_cont);

    if(acertos_cont == palavra_sorteada.length){
      this.alert("Você ganhou!");
    }

    else if(erros_cont < 6){
      this.document.getElementById("forca").setAttribute("src", "svg/forca_"+erros_cont+".svg");

      if(erros_cont == 5){
        this.alert("Você perdeu!");
      }
    }
})

function tecla_errada(){
  for(let i=0; i<input_registro.length; i++) {
    if(input[0].includes(input_registro[i]) == true){
      let tecla = document.getElementById(input_registro[i].toUpperCase());

      tecla.style.backgroundColor = "black";
      tecla.style.color = "white";
    }
}
}

function tecla_certa(){
  for(let i=0; i<input_registro.length; i++) {
      if(input[0].includes(input_registro[i]) == true){
        let tecla = document.getElementById(input_registro[i].toUpperCase());

        tecla.style.backgroundColor = "green";
        tecla.style.color = "white";
      }
  }
}

function tecla_repetida(){
  for(let i=0; i<input_registro.length; i++) {
      if(input[0].includes(input_registro[i]) == true){
        let tecla = document.getElementById(input_registro[i].toUpperCase());

        tecla.animate([
          { opacity: '0.4' },
          { opacity: '1' }
        ], {
          duration: 400,
        });
      }
  }
}