"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    // Método para agregar una nueva nota y calcular el nuevo promedio
    agregarNota(promedio, nuevaNota) {
        return (promedio + nuevaNota) / 2;
    }
    // Método para verificar si aprobó
    aprobar(nota, minima) {
        return nota >= minima;
    }
    // Método para sumar faltas
    calcularFaltas(faltasActuales, nuevas) {
        return faltasActuales + nuevas;
    }
}
// Ejemplo de uso
const estudiante = new Estudiante();
let promedioActual = 8;
promedioActual = estudiante.agregarNota(promedioActual, 10);
console.log("Nuevo promedio:", promedioActual); // 9
console.log("¿Aprobó?", estudiante.aprobar(promedioActual, 7)); // true
console.log("Faltas Totales:", estudiante.calcularFaltas(3, 2)); // 5
//# sourceMappingURL=claseEstudiante.js.map