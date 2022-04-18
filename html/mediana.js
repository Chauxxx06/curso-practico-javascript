const lista1 = [
    500,
    10000,
    100,
    200
]


function ordenarLista(lista1){
    return lista1.sort(function(a,b){return a-b});
}

lista2 = ordenarLista(lista1);
console.log(lista2)

const mitadLista1 = parseInt(lista2.length/2);
let mediana
function esPar(number){
    if (number%2 == 0){
        return true;
    }else{
        return false;
    }
}

if (esPar(lista2.length)){
    mediana = ((lista2[mitadLista1-1] + lista2[mitadLista1])/2); 
}else{
    mediana = lista2[mitadLista1];
    console.log(mediana);
}