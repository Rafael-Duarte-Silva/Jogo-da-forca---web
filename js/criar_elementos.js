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