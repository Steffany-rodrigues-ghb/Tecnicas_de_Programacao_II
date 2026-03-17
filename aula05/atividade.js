const pedidos = [

    {id:1,valor:100,pago:true},
    {id:2,valor:50,pago:false},
    {id:3,valor:300,pago:true},
    {id:4,valor:120,pago:false}
]
    
const total = pedidos.reduce((total,pedido) => {
    if(pedido.pago){
        return total + pedido.valor;
    }
    return total 
    },0);

    console.log(total);
