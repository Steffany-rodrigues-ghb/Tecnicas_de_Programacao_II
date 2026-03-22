//Nesta atividade, você deverá utilizar o método reduce() para somar os valores de gastos realizados durante a semana.
const gastos = [25, 40, 18, 32, 50, 12];

const total_gastos = gastos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Total de gastos na semana:", total_gastos);


//Nesta atividade, você deverá utilizar sort() para ordenar produtos pelo preço e reduce() para calcular o valor total dos produtos.

const produtos = [
{ nome: "Teclado", preco: 120 },
{ nome: "Mouse", preco: 80 },
{ nome: "Monitor", preco: 900 },
{ nome: "Headset", preco: 250 }];

//ordene os produtos do mais caro para o mais barato;
produtos.sort((a, b) => b.preco - a.preco); // sort serve para ordenar os produtos do mais caro para o mais barato

//calcule a soma total dos preços dos produtos;
const valor_total = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0); 

//exiba no console o array ordenado;
console.log("Produtos ordenados do mais caro para o mais barato:");
console.log(produtos);

//exiba no console o valor total.
console.log(`Valor total dos produtos: R$ ${valor_total}`);


