console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 15;
const acompanhada = true;
let = temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log(`Destino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}

for(let cont = 0 ;cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}