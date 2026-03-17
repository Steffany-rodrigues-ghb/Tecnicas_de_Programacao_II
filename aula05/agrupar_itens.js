const alimentos = [
    {nome:'maça',tipo:'fruta'},
    {nome:'alface',tipo:'verdura'},
    {nome:'uva',tipo:'fruta'}
];

const agrupado =
alimentos.reduce((acc,item) => {
const chave = item.tipo;
if(!acc[chave]){
    acc[chave] = [];
}
acc[chave].push(item.nome);
return acc;
},{});

console.log(agrupado);