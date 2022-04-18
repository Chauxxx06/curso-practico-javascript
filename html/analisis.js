const salariosCol = colombia.map(
    function (person){
        return person.salary;
    }
);

const salaryColSorted = salariosCol.sort(
    function(a,b){
        return a-b;
    }
);

function esPar(number){
    return (number % 2 ===0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
       return ((lista[mitad-1] + lista[mitad])/2); 
    }else{
        return lista[mitad];
    }
}



const medianaGeneral = medianaSalarios(salaryColSorted);
const spliceStart = (salaryColSorted.length*90)/100;
const spliceCount = salaryColSorted.length - spliceStart;
const salariosColTop10 = salaryColSorted.splice(spliceStart, spliceCount);
