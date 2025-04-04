function jogar() {

    let herois = []
    let viloes = []

    let forca_herois = []
    let forca_viloes = []

    let total_forca_herois = 0
    let total_forca_viloes = 0

    let info_herois = ""
    let info_viloes = ""

    let resultado = ""

    let viloes_possiveis = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"]

    for (let i = 0; i < 3; i++) {

        let escolha_heroi = prompt("Digite o nome do seu " + (i + 1) + "º herói")
        herois[i] = escolha_heroi

        index_viloes = Math.floor(Math.random() * viloes_possiveis.length)
        viloes[i] = viloes_possiveis[index_viloes]
        viloes_possiveis.splice(index_viloes, 1)
        // Primeiro valor é a partir de onde ele vai começar e o segundo quantos valores serão excluidos

        forca_herois[i] = Math.floor(Math.random() * 10) + 1
        forca_viloes[i] = Math.floor(Math.random() * 10) + 1

        total_forca_herois += forca_herois[i]
        total_forca_viloes += forca_viloes[i]

        info_herois += "Herói: " + herois[i] + " - " + "Força: " + forca_herois[i] + "<br>"
        info_viloes += "Vilão: " + viloes[i] + " - " + "Força: " + forca_viloes[i] + "<br>"
    }

    if (total_forca_herois > total_forca_viloes) {
        resultado = "Vitória"
    } else if (total_forca_herois < total_forca_viloes) {
        resultado = "Derrota"
    } else {
        resultado = "Empate"
    }

    document.getElementById("subtitulo").innerHTML = resultado

    document.getElementById("info_herois").innerHTML = info_herois

    document.getElementById("info_viloes").innerHTML = info_viloes

    document.getElementById("info_forca").innerHTML = "Total da força dos heróis: " + total_forca_herois + "<br>" + "Total da força dos vilões: " + total_forca_viloes

    document.getElementById("btn_resultado").innerHTML = "Jogar novamente"
}