"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auto {
    // Método para acelerar
    acelerar(velocidadActual, incremento) {
        return velocidadActual + incremento;
    }
    // Método para frenar
    frenar(velocidadActual, decremento) {
        const nuevaVelocidad = velocidadActual - decremento;
        return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
    }
    // Método para calcular velocidad media
    recorrer(distancia, tiempo) {
        if (tiempo <= 0) {
            throw new Error("El tiempo debe ser mayor que cero.");
        }
        return distancia / tiempo;
    }
}
// Ejemplo de uso
const auto = new Auto();
let velocidad = 50;
velocidad = auto.acelerar(velocidad, 20);
console.log("Velocidad tras acelerar:", velocidad); // 70
velocidad = auto.frenar(velocidad, 80);
console.log("Velocidad tras frenar:", velocidad); // 0
const velocidadMedia = auto.recorrer(200, 4);
console.log("Velocidad media:", velocidadMedia); // 50
//# sourceMappingURL=claseAuto.js.map