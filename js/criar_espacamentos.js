for(let i = 0; i < palavra_sorteada.length; i++){
    let espacamentos = document.createElement('span');
    espacamentos.setAttribute("id", "espacamentos_"+i);
    espacamentos.style.width = "6vh";
    espacamentos.style.height = "0.7vh";
    espacamentos.style.marginInline = "1vh";
    espacamentos.style.marginTop = "10vh";
    espacamentos.style.backgroundColor = "black";
    espacamentos.style.display = "flex";
    espacamentos.style.alignItems = "center";
    espacamentos.style.justifyContent = "center";
    document.getElementById("jogo").appendChild(espacamentos);
  }