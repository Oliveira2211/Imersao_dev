function jogar() {

    let resultado

    const dicionario = {
        "1": "pedra",
        "2": "papel",
        "3": "tesoura"
    }

    const jogador = prompt("Escolha uma opção" + "\n\n" + "1 - para escolher pedra;" + "\n" + "2 - para escolher papel;" + "\n" + "3 - para escolher tesoura.")

    const oponente = Math.floor(Math.random() * 3) + 1

    if (jogador == 1 || jogador == 2 || jogador == 3) {

        if (jogador == 1 && oponente == 3 || jogador == 2 && oponente == 1 || jogador == 3 && oponente == 2) {
            resultado = "Vitória"
        } else if (jogador == 1 && oponente == 2 || jogador == 2 && oponente == 3 || jogador == 3 && oponente == 1) {
            resultado = "Derrota"
        } else {
            resultado = "Empate"
        }

        alert(resultado + "\n\n" + "Você escolheu " + dicionario[jogador] + "\n" + "Seu oponente escolheu " + dicionario[oponente])

    } else {
        alert("Valor inválido")
    }

}