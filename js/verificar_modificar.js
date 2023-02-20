let erros = 0;
let acertos = 0;
let cont = 0;

let digitadas = [];
let registro = [];

let split = palavra.split('');
let comparar = "";
console.log(comparar);
console.log(split);

addEventListener("keypress", function(event){
    comparar = event.key;

    if(comparar == " "){

    }

    else if(registro.filter(numero => comparar.includes(numero)) == false){
        registro[cont] = event.key;
        cont++;
        
        if(split.filter(numero => comparar.includes(numero)) == false){
          digitadas[erros] = event.key;
          erros++;
          this.document.getElementById("digitadas").innerText = "Letras digitadas: "+digitadas.toString();
        }  

        else{
          for(let i=0; i<split.length; i++) {
            if(comparar[0].includes(split[i]) == true){
              let modificar = document.getElementById("espacamentos"+i);
    
              modificar.innerText = split[i].toUpperCase();
              modificar.style.marginBottom = "15vh";
              modificar.style.marginLeft = "2vh";
              modificar.style.backgroundColor = "white";
              modificar.style.fontSize = "8vh";
              modificar.style.fontFamily = "'Roboto Mono', monospace";
              acertos++;
            }
          }
        }
    }

    else{
        console.log("igual");
    }

    console.log(erros);

    if(erros == 5){
      this.alert("Você perdeu!");
    }

    if(acertos == split.length){
      this.alert("Você ganhou!");
    }

    if(erros < 6){
      this.document.getElementById("forca").setAttribute("src", "svg/forca_"+erros+".svg");
    }

    console.log(digitadas);
})