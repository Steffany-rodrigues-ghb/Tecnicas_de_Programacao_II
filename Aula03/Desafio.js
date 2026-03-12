const input = require('readline-sync')

const produtos = [
    {nome: 'Mouse',preco:50,estoque:10},
    {nome: 'Teclado',preco:150,estoque:5},
    {nome: 'Monitor',preco:800,estoque:0}
];

// encontre o produto mouse (find)
function procurar_mouse(lista_produtos, item) {
    const produto_encontrado = lista_produtos.find(u => u.nome === item);
    return produto_encontrado
}
console.log(procurar_mouse(produtos, "Mouse"))

// verifique de todos tem estoque (every)

function verificar_item(produtos) {
    const verificacao = produtos.every(u => u.estoque)
    return verificacao
}
console.log(verificar_item(produtos))

// crie lista com 10% de desconto (map) 

function desconto_item(produtos) {
    const  desconto = produtos.map (u => u.preco)
    return desconto
}
 console.log(desconto_item(produtos))