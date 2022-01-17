console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 15;
const acompanhada = true;
temPassagemComprada = true;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('comprador maior de idade');
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (acompanhada) {
//     console.log('está acompanhada');
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log('Não é maior de idade e não vender');
// }

if (idadeComprador >= 18 || acompanhada == true) {
    console.log('Boa viagem');
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log('Não é maior de idade e não vender');
}

console.log("embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
}