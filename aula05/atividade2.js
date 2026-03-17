const jogadores = [
    {nome:'luigi',pontos:100},
    {nome:'mario',pontos:250},
    {nome:'yoshi',pontos:150}
];

jogadores.sort((a,b) => {return b.pontos - a.pontos});
console.log(jogadores)

const mario = jogadores.find(j => {

    return j.nome === 'mario';
});

console.log(mario);