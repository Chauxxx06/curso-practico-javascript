
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
function perimetroTriangulo(ladoIzq, ladoDrch, base) {
        
        return ladoIzq + ladoDrch + base;    
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

function clcPerimetroTriangulo(){
    const ladoI = document.getElementById("inputTrianguloLadoA");
    const ladoD = document.getElementById("inputTrianguloLadoB");
    const baseT = document.getElementById("inputTrianguloBase");
    const perimetroT = perimetroTriangulo(parseInt(ladoI.value), parseInt(ladoD.value), parseInt(baseT.value));
    alert(perimetroT);
}

function clcAreaTriangulo(){
    const ladoI = document.getElementById("inputTrianguloLadoA");
    const ladoD = document.getElementById("inputTrianguloLadoB");
    const baseT = document.getElementById("inputTrianguloBase");
    let ladoIn = parseInt(ladoI.value);
    let ladoDn = parseInt(ladoD.value);
    let baseTn = parseInt(baseT.value);
    if (ladoIn==ladoDn){
        const alturaT = alturaTriangulo(ladoIn,baseTn)
        const areaT = areaTriangulo(alturaT, baseTn);
        alert(areaT);
    }else{
        alert("Este no es un triaunglo isoceles");
    }

}