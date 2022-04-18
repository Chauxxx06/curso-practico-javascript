/* const lista1 = [
    100,
    200,
    300,
    500
]

let sumaLista1 = 0;
for (i=0; i<lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}
avglista1 = sumaLista1/lista1.length;
console.log(avglista1); */

function avg(list){
    /* let sumaLista1 = 0;
    for (i=0; i<list.length; i++){
        sumaLista1 = sumaLista1 + list[i];
    } */
    const sumalist = list.reduce(
        function (valorAcc = 0, nuevoElemento){
            return valorAcc + nuevoElemento
        }
    );
    const avglist = sumalist/list.length;
    return avglist
}