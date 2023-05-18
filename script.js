function calcularPrecio (precioAlimento, cantidadAlimento, porcentajeDescuento, costoEnvio) {
    let descuento = (precioAlimento * porcentajeDescuento) / 100;
    let precioConDescuento = precioAlimento - descuento;
    return (precioConDescuento * cantidadAlimento) + costoEnvio;
}

const envio = 300;

let alimento = parseFloat(prompt("Ingrese el monto del alimento"));
let cantidad = parseInt(prompt("Ingrese la cantidad de bolsones que necesita"));
let descuento = parseInt(prompt("Ingresa el porcentaje de descuento que figura en la tarjeta")) 

let precioFinal = calcularPrecio(alimento, cantidad, descuento, envio);
while (cantidad <= 0)
    alert("Gracias por comunicarse con alimentitos");
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Gacias, cuidemos a los animalitoos!");