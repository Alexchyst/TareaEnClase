"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    depositar(saldo, monto) {
        return saldo + monto;
    }
    retirar(saldo, monto) {
        if (monto > saldo)
            throw new Error("Fondos insuficientes");
        return saldo - monto;
    }
    transferir(saldoOrigen, monto) {
        if (monto > saldoOrigen)
            throw new Error("No se puede transferir más del saldo disponible");
        return saldoOrigen - monto;
    }
}
const banco = new Banco();
let saldo = 500;
// Depósito
saldo = banco.depositar(saldo, 200);
console.log("Nuevo saldo después del depósito:", saldo);
// Retiro
saldo = banco.retirar(saldo, 100);
console.log("Nuevo saldo después del retiro:", saldo);
// Transferencia
saldo = banco.transferir(saldo, 300);
console.log("Saldo luego de transferir:", saldo);
//# sourceMappingURL=claseBanco.js.map