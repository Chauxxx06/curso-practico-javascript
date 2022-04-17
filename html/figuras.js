
//el Cuadrado

console.group("Cuadrado")
//const ladoCuadrado = 5;
//(console.log("los cuadrados del cuadrado miden: " + ladoCuadrado + " cm");
function perimetroCuadrado(lado){
    return lado*4;
}
console.log("El perimetro del cuadrado es: " + perimetroCuadrado(10) + " cm");
function areaCuadrado(lado) {
    return Math.pow(lado,2);
}
console.log("El area del cuadrado es: " + areaCuadrado(10) + " cm2");
console.groupEnd();

//El triagulo (isoceles)
console.group("Triangulo")
/* const ladoTriangulo = 6;
const baseTriangulo = 4; */
function perimetroTriangulo(lado, base) {
    return lado*2 + base;
}
function alturaTriangulo(lado, base) {
    return Math.sqrt(Math.pow(lado,2) - Math.pow(base/2,2));
}
function areaTriangulo(altura, base){
    return ((altura*base)/2)
}
console.log("El perimetro del triangulo es " + perimetroTriangulo(6,4) + " cm");
console.log("La altura del triangulo es " + alturaTriangulo(6,4) + " cm");
console.log("El area del triangulo es " + areaTriangulo(alturaTriangulo(6,4),4) + " cm2");
console.groupEnd();

//El Circulo 
console.group("Circulo")
//const radius = 4;
function perimetroCirculo(radius) {
    return 2*Math.PI*radius;
}
function areaCirculo(radius){
    return Math.PI*Math.pow(radius,2);
}
console.log("El perimetro del circulo es: " + perimetroCirculo(4) + " cm");
console.log("El area del circulo es: " + areaCirculo(4) + " cm2");
console.groupEnd();


function clcPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimtero = perimetroCuadrado(value);
    alert(perimtero);
}

function clcAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimtero = areaCuadrado(value);
    alert(perimtero);
}