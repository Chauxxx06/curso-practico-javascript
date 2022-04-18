const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

  const lista1Count = {};
  lista1.map(
      function(elemento){
          if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
          }else{
            lista1Count[elemento] = 1;
          }
        
      }
  );

  const list1array = Object.entries(lista1Count).sort(
    function(valorAcc, nuevoValor) {
        return valorAcc[1] - nuevoValor[1]
    }
    );

    moda = list1array[list1array.length -1];