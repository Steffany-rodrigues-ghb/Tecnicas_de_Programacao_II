const produtos = [ // aqui cria uma variavel
    {id:1,nome:"Teclado",preco:100},
    {id:2,nome:"Mouse",preco:50} // dentro dela coloca objetos
];
 
const resumo = produtos.map(p => ({ // aqui cria outra variavel e o .map vai transformar 
    nome: p.nome.toUpperCase(),  // aq ele transforma o nome em letra maiuscula 
    preco_formatado:`R$ ${p.preco.toFixed(2)}`})); // aqui ele muda para decimais o preco
    console.log(resumo);


    // UTILIZANDO FILTER (FILTRO)

    const numeros = [1,2,3,4,5,6]; // aq tem uma lista de numeros que vai ser o produto original 
    const pares = numeros.filter(n => n % 2 === 0); // aq foi criado uma variavel que vai receber a lista filtrada
    // no caso,o numero que dividido por dois,o resultado sobre 0,vai na lista
    console.log(pares);

    const impares = numeros.filter(n => n % 2 !=0); // aq rolou a msm coisa,só difere que !=0 vai dar numero impar
    console.log(impares);

    //FILTRANDO PREÇOS
    const produtos_p = [
        {nome:"teclado",preco:150},
        {nome:"monitor",preco:800}
    ]
    const caros = produtos_p.filter(p => p.preco > 100);
    console.log(caros);

    // COMPOSIÇÃO
    const alunos = [
        {nome:"ana",nota:8},
        {nome:"beto",nota:5},
        {nome:"carlos",nota:9}
    ];

    const msg = alunos
    .filter(a => a.nota >= 7)
    .map(a => `Parabens ${a.nome}!`);
    console.log(msg)

    const msg_np = alunos.filter(a => a.nota > 7) .map(a => `sinto muito,${a.nome},na proxima você passa!`);
    console.log(msg_np)

    //CASO REAL: PEDIDOS
    const pedidos = [
        {id:1,status:"pago", valor:200 },
        {id:2,status:"pendente", valor:150 },
        {id:3,status:"pago", valor:50 },
        {id:4,status:"cancelado", valor:300 }
    ];

    // objetivo: filtrar apenas os pagos,gerar a lista dos valores e dps enfeitar 
    const msg_pg = pedidos
    .filter(a => a.status === "pago")
    .map(a => `Os produtos pagos possuem id: ${a.id} e preço R$ ${a.valor.toFixed(2)}!`);
    console.log(msg_pg);


  





