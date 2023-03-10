addEventListener("resize", function (){
    redimensionar();  
});

function redimensionar(){
    for(let i=0; i<palavra_sorteada.length; i++){
        if(document.getElementById("espacamentos_"+i).innerText != false){
            const modificar = document.getElementById("espacamentos_"+i);

            if (window.screen.width <= 200){
                modificar.style.fontSize = "5vh";
                modificar.style.marginBottom = "3vh";
                
            }
            if (window.screen.width >= 400){
                modificar.style.fontSize = "6vh";
                modificar.style.marginBottom = "4vh";
                
            }
            if (window.screen.width >= 600){
                modificar.style.fontSize = "7vh";
                modificar.style.marginBottom = "5vh";
                
            }
            if (window.screen.width >= 800){
                modificar.style.fontSize = "8vh";
                modificar.style.marginBottom = "6vh";
                
            }
            if (window.screen.width >= 1000){
                modificar.style.fontSize = "9vh";
                modificar.style.marginBottom = "7vh";
                
            }
            if (window.screen.width >= 1200){
                modificar.style.fontSize = "10vh";
                modificar.style.marginBottom = "8vh";
                
            }
            if (window.screen.width >= 1700){
                modificar.style.fontSize = "9vh";
                modificar.style.marginBottom = "5vh";
                
            }
            if (window.screen.width >= 2500){
                modificar.style.fontSize = "8vh";
                modificar.style.marginBottom = "6vh";
            }
        }
    }
}