function tecla(cor){
  for(let i=0; i<input_registro.length; i++) {
    if(input[0].includes(input_registro[i]) == true){
      let tecla = document.getElementById(input_registro[i]);

      tecla.style.backgroundColor = cor;
      tecla.style.color = "white";
    }
}
}

function tecla_repetida(){
  for(let i=0; i<input_registro.length; i++) {
      if(input[0].includes(input_registro[i]) == true){
        let tecla = document.getElementById(input_registro[i]);

        tecla.animate([
          { opacity: '0.4' },
          { opacity: '1' }
        ], {
          duration: 400,
        });
      }
  }
}

for(let i=0; i<26; i++){
  document.getElementsByClassName("tecla")[i].setAttribute("onclick", "teclado(this.innerText)");
}