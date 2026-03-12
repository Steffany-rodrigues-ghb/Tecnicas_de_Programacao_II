const input = require('readline-sync')

const usuarios = [
    {id:1,nome:'Ana',admin:true},
    {id:2,nome:'Bia',admin:true},
    {id:3,nome:'Gui',admin:true}
];


const nums = [10,20,30];
// Onde esta o 20?
console.log(nums.index0f(20)); //1
console.log(nums.includes(50)); 


//Procurando onde id é igual a 2
const bia = usuarios.find(u => u.id ===2);
console.log(bia);
// {id:2,nome:'Bia',admin:false},}

//tem algum admin na lista?
const tem_admin = usuarios.some( u => u.admin);
console.log(tem_admin) // true,pq Ana é admin

//todos sao admins?
const todos_admin = usuarios.every(u => u.admin);
console.log(todos_admin);
// false pq bia e gui não são 

const campos = [
    'Nome preenchido',
    '', // email vazio!
    'Senha ok'
];
const valido = campos.every(campo => campo.length > 0);

function desconto_produtos(produtos) {
   const taxa_desconto = 0.9; 
   
   const lista_com_Desconto = produtos.map(p => {
      
      return {
         ...p, 
         preco: p.preco * taxa_desconto
      };
   });
   
   return lista_Com_Desconto;
}

console.log(desconto_produtos(produtos));