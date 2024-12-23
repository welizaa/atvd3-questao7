let palavra = prompt("Digite uma palavra para reverter:");

let palavrainvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavrainvertida += palavra[i];
}


alert("A palavra invertida e: " + palavrainvertida);
