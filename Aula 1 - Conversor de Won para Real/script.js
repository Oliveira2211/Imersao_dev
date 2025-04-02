const won = 0.004

function conversor() {

    const valor = prompt("Digite um valor em Won")

    const resultado = won * valor
    const qtd_won = valor < 2 ? "Won" : "Wons"
    const qtd_real = resultado < 2 ? "Real" : "Reais"

    if (valor > 0) {
        alert("Valor atual do Won: " + won + "\n\n" + valor + " " + qtd_won + " equivale a " + resultado + " " + qtd_real)
    } else {
        alert("Valor inválido")
    }

}