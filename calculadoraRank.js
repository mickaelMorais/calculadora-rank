function saldo(vitorias, derrotas) {
    return vitorias - derrotas
}

let vitorias = 8
let derrotas = 4

let saldoV = saldo(vitorias, derrotas)

function classificação(saldo) {
    if (saldo < 10) {
        return "ferro"
    }
    else if (saldo > 10 && saldo < 20){
        return "bronze"
    }
    else if (saldo > 20 && saldo < 50){
        return "prata"
    }
    else if (saldo > 50 && saldo < 80){
        return "ouro"
    }
    else if (saldo > 80 && saldo < 90){
        return "diamante"
    }
    else if (saldo > 90 && saldo < 100){
        return"lendário"
    }
    else if (saldo > 100){
        return "imortal"
    }
}

console.log(`o héroi um saldo de ${saldoV} e está no nivel de ${classificação(saldoV)}`)