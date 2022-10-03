const carrosDom = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "VW", "Honda", "Toyota", "Hyundai"]


veiculos.push("BMW");
//PUSH SEMPRE ADICIONA NO FINAL

veiculos.unshift("Audi");
//adcionone no inicio do array
//push - adiciona ao final
//unshift - adiciona ao início

//removendo do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo o final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//removendo um elemento do array
const posicao = 2;
const removidos = veiculos.splice(1,2);

//removendo e adicionando elementos
const removidos2 = veiculos.splice(1,2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key)=>{
    carrosDom.innerHTML += `<option name="${key}">${value}</option>`;
});

///////// AS PRINCIPAIS FUNÇÕES DO ARRAYS LOGO EM CIMA - MANIPULAM O ARRAY, PARADGMA - BEM ANTIGO NO JS.

/////////// AGORA OUTRAS FUNÇÕES ABAIXO - PARADGMA FUNCIONLA, NÃO PODEM SER ALTERADOS.
// 

//splice - remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
//slice - retorno um novo array, o primeiro parametro é opciomal e começa em zero.
// o ultimo paramentro determina até onde deve ser filtrado, porém excluindo este ultimo elemento.
const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3, 5));
console.log(nbaTeams, "último");

//slice - retorna um novo array

// map, filter, recude, find, findIndex, search, sort, reverse, split, join substring
//split - quebra - join junta todo mundo 

const name = "Isabel Pereira de Souza";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join("");
console.log(nameComplete);

////////////////////////////////////////////////////////////////////
//ma semelhante ao forEach, mas gera um novo array, ele pecorre todo o array

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic);//retornar um novo arry mapeando e buscando o array interior - pecorre um array - pecorre um array e mapea todas as posições, retornando um novo array
const celticsFilter = nbaTeams.filter(procuraCeltic); //o filter vai do começo até o fim
const celticsFind = nbaTeams.find(procuraCeltic); // find só busca - retorna a primeira ocorrência de uma busca com o parâmetro que a função determinou.

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");