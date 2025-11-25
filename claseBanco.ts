class Banco {
    depositar(saldo: number, monto: number): number {
        return saldo + monto;
    }

    retirar(saldo: number, monto: number): number {
        if (monto > saldo) throw new Error("Fondos insuficientes");
        return saldo - monto;
    }

    transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) throw new Error("No se puede transferir más del saldo disponible");
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
