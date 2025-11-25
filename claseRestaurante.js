"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurante {
    // Calcula el total de un producto según su precio y cantidad
    calcularTotal(precio, cantidad) {
        return precio * cantidad;
    }
    // Aplica un porcentaje de descuento al total
    aplicarDescuento(total, descuento) {
        return total - (total * descuento / 100);
    }
    // Calcula la propina según un porcentaje
    calcularPropina(total, porcentaje) {
        return total * (porcentaje / 100);
    }
}
// Ejemplo de uso
const restaurante = new Restaurante();
const totalProducto = restaurante.calcularTotal(12.50, 3);
console.log("Total del producto:", totalProducto); // 37.5
const totalConDescuento = restaurante.aplicarDescuento(totalProducto, 10);
console.log("Total con descuento:", totalConDescuento); // 33.75
const propina = restaurante.calcularPropina(totalConDescuento, 15);
console.log("Propina:", propina); // 5.0625
//# sourceMappingURL=claseRestaurante.js.map