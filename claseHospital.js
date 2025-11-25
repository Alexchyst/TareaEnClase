"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hospital {
    // Calcula la dosis total del medicamento según el peso del paciente
    calcularDosis(peso, mgPorKg) {
        return peso * mgPorKg;
    }
    // Calcula el Índice de Masa Corporal (IMC)
    calcularIMC(peso, altura) {
        if (altura <= 0) {
            throw new Error("La altura debe ser mayor que cero.");
        }
        return peso / (altura * altura);
    }
    // Registra nuevas visitas y devuelve el total acumulado
    registrarVisitas(visitasActuales, nuevas) {
        return visitasActuales + nuevas;
    }
}
// Ejemplo de uso
const hospital = new Hospital();
const dosis = hospital.calcularDosis(70, 5);
console.log("Dosis total (mg):", dosis); // 350 mg
const imc = hospital.calcularIMC(70, 1.75);
console.log("IMC:", imc); // ~22.86
const visitas = hospital.registrarVisitas(4, 2);
console.log("Visitas totales:", visitas); // 6
//# sourceMappingURL=claseHospital.js.map