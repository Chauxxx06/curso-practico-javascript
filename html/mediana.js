const lista1 = [
    100,
    200,
    500,
    10000
]

const mitadLista1 = parseInt(lista1.length/2);
let mediana
function esPar(number){
    if (number%2 == 0){
        return true;
    }else{
        return false;
    }
}

if (esPar(lista1.length)){
    mediana = ((lista1[mitadLista1-1] + lista1[mitadLista1])/2); 
}else{
    mediana = lista1[mitadLista1];
    console.log(mediana);
}