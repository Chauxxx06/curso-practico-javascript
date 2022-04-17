
//el Cuadrado

console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("los cuadrados del cuadrado miden: " + ladoCuadrado + " cm");
const perimetroCuadrado = 5*4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
const areaCuadrado = Math.pow(ladoCuadrado,2);
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//El triagulo (isoceles)
console.group("Triangulo")
const ladoTriangulo = 6;
const baseTriangulo = 4;
let perimetroTriangulo = ladoTriangulo*2 + baseTriangulo;
let alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo,2) - Math.pow(baseTriangulo/2,2));
let areaTriangulo = ((alturaTriangulo*baseTriangulo)/2)
console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm");
console.log("La altura del triangulo es " + alturaTriangulo + " cm");
console.log("El area del triangulo es " + areaTriangulo + " cm2");
console.groupEnd();

//El Circulo 
console.group("Circulo")
const radius = 4;
let perimetroCirculo = 2*Math.PI*radius;
let areaCirculo = Math.PI*Math.pow(radius,2);
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
console.log("El area del circulo es: " + areaCirculo + " cm2");
console.groupEnd();
