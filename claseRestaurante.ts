class Restaurante {

    // Calcula el total de un producto según su precio y cantidad
    calcularTotal(precio: number, cantidad: number): number {
        return precio * cantidad;
    }

    // Aplica un porcentaje de descuento al total
    aplicarDescuento(total: number, descuento: number): number {
        return total - (total * descuento / 100);
    }

    // Calcula la propina según un porcentaje
    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}

// Ejemplo de uso
const restaurante = new Restaurante();

const totalProducto = restaurante.calcularTotal(12.50, 3);
console.log("Total del producto:", totalProducto);  // 37.5

const totalConDescuento = restaurante.aplicarDescuento(totalProducto, 10);
console.log("Total con descuento:", totalConDescuento); // 33.75

const propina = restaurante.calcularPropina(totalConDescuento, 15);
console.log("Propina:", propina); // 5.0625
