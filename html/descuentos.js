/* const precioOriginal = 120;
const descuento = 15;

const porcentajePrecioConDescuento = 100-descuento;
const precioConDescuento = precioOriginal*(porcentajePrecioConDescuento/100);
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */

function clcPrecioConDescuento(precioBase, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = precioBase*(porcentajePrecioConDescuento/100);
    return precioConDescuento
}

function clcPrecioDescuento(){
    const precioB = document.getElementById("inputPrecio");
    const desc = document.getElementById("inputDescuento");
    const precioBn = parseInt(precioB.value);
    const descn = parseInt(desc.value);
    let precioConDescuento = clcPrecioConDescuento(precioBn,descn);
    const resultHTML = document.getElementById("resultPrecio");
    resultHTML.innerText = "El precio con descuento es de $US " + precioConDescuento;
}