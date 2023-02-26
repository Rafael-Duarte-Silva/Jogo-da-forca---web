addEventListener("resize", function (){
    redimensionar();  
});

function redimensionar(){
    for(let i=0; i<input_registro.length; i++) {
        for(let x=0; x<palavra_sorteada.length; x++) {
            if(input_registro[i].includes(palavra_sorteada[x]) == true){
                let modificar = document.getElementById("espacamentos_"+x);
    
                if (window.screen.width <= 200) {
                    modificar.style.fontSize = "5vh";
                    modificar.style.marginBottom = "3vh";
                    
                }
                if (window.screen.width >= 400) {
                    modificar.style.fontSize = "6vh";
                    modificar.style.marginBottom = "4vh";
                    
                }
                if (window.screen.width >= 600) {
                    modificar.style.fontSize = "7vh";
                    modificar.style.marginBottom = "5vh";
                    
                }
                if (window.screen.width >= 800) {
                    modificar.style.fontSize = "8vh";
                    modificar.style.marginBottom = "6vh";
                    
                }
                if (window.screen.width >= 1000) {
                    modificar.style.fontSize = "9vh";
                    modificar.style.marginBottom = "7vh";
                    
                }
                if (window.screen.width >= 1200) {
                    modificar.style.fontSize = "10vh";
                    modificar.style.marginBottom = "8vh";
                    
                }
                if (window.screen.width >= 1700) {
                    modificar.style.fontSize = "9vh";
                    modificar.style.marginBottom = "5vh";
                    
                }
                if (window.screen.width >= 2500) {
                    modificar.style.fontSize = "8vh";
                    modificar.style.marginBottom = "6vh";
                }
            }
        }
    }
}