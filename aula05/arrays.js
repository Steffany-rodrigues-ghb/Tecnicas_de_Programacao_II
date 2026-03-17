// reduce,sort,search e padroes de algoritmo

// ex1: somando numeros
// const numeros = [10,20,30];

// const total = numeros.reduce((acc,curr) =>{return acc + curr;},0 );
 //console.log(total)

const pedidos = [
    {id:1,valor:100},
    {id:2,valor:50},
    {id:3,valor:200},
];

const total = pedidos.reduce((acc,pedido) => {
    return acc + pedido.valor},0);
    console.log(total);