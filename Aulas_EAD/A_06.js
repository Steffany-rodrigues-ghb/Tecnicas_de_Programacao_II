const produtos = [
  { id: 1, nome: "Arroz 5kg", categoria: "Alimentos", preco: 32.90, estoque: 14, vendidos: 23 },
  { id: 2, nome: "Feijão 1kg", categoria: "Alimentos", preco: 8.50, estoque: 9, vendidos: 31 },
  { id: 3, nome: "Leite Integral", categoria: "Bebidas", preco: 5.99, estoque: 20, vendidos: 42 },
  { id: 4, nome: "Café 500g", categoria: "Alimentos", preco: 18.75, estoque: 7, vendidos: 18 },
  { id: 5, nome: "Açúcar 1kg", categoria: "Alimentos", preco: 4.89, estoque: 0, vendidos: 27 },
  { id: 6, nome: "Óleo de Soja", categoria: "Alimentos", preco: 7.49, estoque: 11, vendidos: 25 },
  { id: 7, nome: "Sabonete", categoria: "Higiene", preco: 2.99, estoque: 16, vendidos: 35 },
  { id: 8, nome: "Detergente", categoria: "Limpeza", preco: 3.49, estoque: 13, vendidos: 29 },
  { id: 9, nome: "Papel Higiênico 12un", categoria: "Limpeza", preco: 16.90, estoque: 6, vendidos: 14 },
  { id: 10, nome: "Shampoo", categoria: "Higiene", preco: 12.99, estoque: 8, vendidos: 17 },
  { id: 11, nome: "Biscoito Recheado", categoria: "Alimentos", preco: 3.25, estoque: 25, vendidos: 40 },
  { id: 12, nome: "Refrigerante 2L", categoria: "Bebidas", preco: 9.99, estoque: 10, vendidos: 22 },
  { id: 13, nome: "Macarrão 500g", categoria: "Alimentos", preco: 4.50, estoque: 18, vendidos: 33 },
  { id: 14, nome: "Água Mineral 1,5L", categoria: "Bebidas", preco: 2.50, estoque: 30, vendidos: 50 },
  { id: 15, nome: "Chocolate Barra", categoria: "Alimentos", preco: 6.75, estoque: 12, vendidos: 21 }
];

//Crie um novo array contendo apenas os nomes dos produtos
const nomes_produtos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos: ", nomes_produtos)

//Liste apenas os produtos que possuem estoque maior que zero
const produtos_estoque = produtos.filter(produto => produto.estoque > 0);
console.log("Produtos com estoque maior que zero: ", produtos_estoque)

// Liste apenas os produtos da categoria "Alimentos"
const produto_alimentos = produtos.filter(produto => produto.categoria === "Alimentos")
console.log("Produtos da categoria Alimentos: ", produto_alimentos)

//Busque o produto com o nome "Café 500g" e mostre o objeto completo no console.
 const produto_cafe = produtos.find(produto => produto.nome === "Café 500g")
 console.log("Produto encontrado: ", produto_cafe)

/*Crie um novo array contendo:
   • nome do produto
   • preço original
   • preço com 10% de desconto
*/
const produtos_com_desconto = produtos.map(produto => {
    return{ //aq p cada produto,ele vai criar nova lista com os ngc abaixo colocado
        nome: produto.nome,
        preco_original: produto.preco,
        preco_com_desconto: (produto.preco * 0.9).toFixed(2)
    }
}) 
console.log("Produtos com desconto: ", produtos_com_desconto)

// Calcule a soma total de unidades em estoque considerando todos os produtos.
const soma_total = produtos.reduce((acumulador, produto) => acumulador + produto.estoque, 0);
console.log("Soma total de unidades em estoque: ", soma_total)

//Calcule o valor total que existe no estoque do mercado
const valor_total_estoque = produtos.reduce((acumulador,produto) => acumulador + (produto.preco * produto.estoque), 0);

//Ordene os produtos do mais barato para o mais caro.
const produtos_ordenados = produtos.sort((a, b) => a.preco - b.preco);
console.log("Produtos ordenados do mais barato para o mais caro: ", produtos_ordenados)

//Ordene os produtos do mais vendido para o menos vendido
const produtos_mais_vendidos = produtos.sort((a, b) => b.vendidos - a.vendidos)
console.log( "Produtos ordenados do mais vendido para o menos vendido: ", produtos_mais_vendidos)

//Descubra qual é o produto com maior quantidade em estoque.
const produto_maior = produtos.reduce((maior, produto) => {
    if (produto.estoque > maior.estoque) {
        return produto;
    }
    return maior;
})
console.log("Produto com maior quantidade em estoque: ", produto_maior)

/* Crie um relatório final em um objeto com as seguintes informações:
   • totalProdutos
   • totalUnidadesEmEstoque
   • totalProdutosSemEstoque
   • valorTotalEstoque*/
const relatorio_final = {
    total_produtos: produtos.length,
    total_unidades_estoque: produtos.reduce((acumulador, produto) => acumulador + produto.estoque, 0),
    total_produtos_sem_estoque: produtos.filter(produto => produto.estoque === 0).length,
    valor_total_estoque: produtos.reduce((acumulador, produto) => acumulador + (produto.preco * produto.estoque), 0).toFixed(2)
}
console.log("Relatório final: ", relatorio_final)
