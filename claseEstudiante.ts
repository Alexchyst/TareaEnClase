class Estudiante {

    // Método para agregar una nueva nota y calcular el nuevo promedio
    agregarNota(promedio: number, nuevaNota: number): number {
        return (promedio + nuevaNota) / 2;
    }

    // Método para verificar si aprobó
    aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }

    // Método para sumar faltas
    calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}

// Ejemplo de uso
const estudiante = new Estudiante();

let promedioActual = 8;
promedioActual = estudiante.agregarNota(promedioActual, 10);
console.log("Nuevo promedio:", promedioActual);  // 9

console.log("¿Aprobó?", estudiante.aprobar(promedioActual, 7)); // true

console.log("Faltas Totales:", estudiante.calcularFaltas(3, 2)); // 5
