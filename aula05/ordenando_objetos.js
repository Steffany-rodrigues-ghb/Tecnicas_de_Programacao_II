const produtos = [
    {nome:'teclado',preco:150},
    {nome:'mouse',preco:50},
    {nome:'monitor',preco:800}
]; // ordenar pelo preço crescente

produtos.sort((a,b) => {return a.preco - b.preco});
console.log(produtos);