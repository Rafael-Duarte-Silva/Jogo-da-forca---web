function tecla_cor(cor){
  document.getElementById(input).style.backgroundColor = cor;
  document.getElementById(input).style.color = "white";
}

function tecla_repetida(){
  document.getElementById(input).animate([
    { opacity: '0.4' },
    { opacity: '1' }
  ], {
    duration: 400,
  });
}