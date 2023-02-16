const tema = document.getElementById("tema").innerText;

var palavras = ['a', 'b'];

let palavra = palavras.sort();
console.log(palavra);

document.getElementById("tema").innerText = tema+palavras;

function sortear(){
    console.log(Math.floor(Math.random() * 2));
    return Math.floor(Math.random() * 2);
}  