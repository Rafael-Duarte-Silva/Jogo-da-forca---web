for(let i=0; i<26; i++){
  document.getElementsByClassName("teclas")[i].setAttribute("onclick", "teclado(this.innerText)");
}

function tecla_cor(cor){
  let tecla = document.getElementById(input);

  tecla.style.backgroundColor = cor;
  tecla.style.color = "white";
}

function tecla_repetida(){
  let tecla = document.getElementById(input);

  tecla.animate([
    { opacity: '0.4' },
    { opacity: '1' }
  ], {
    duration: 400,
  });
}