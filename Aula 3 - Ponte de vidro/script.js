function jogar() {

    let rodada = 1

    while (rodada < 4) {

        let escolha = prompt("Rodada: " + rodada + "\n\n" + "Você está diante de uma ponte de vidro, há 3 pisos, porém apenas 2 deles são seguros, qual piso você escolhe?" + "\n\n" + "Opções: 1, 2, 3")

        if (escolha == 1 || escolha == 2 || escolha == 3) {

            let piso_quebrado = Math.floor(Math.random() * 3) + 1

            if (escolha == piso_quebrado) {
                alert("Você perdeu" + "\n\n" + "Sua escolha: " + escolha + "\n" + "Piso quebrado: " + piso_quebrado)
                break
            } else {
                alert("Você passou para a próxima rodada" + "\n\n" + "Sua escolha: " + escolha + "\n" + "Piso quebrado: " + piso_quebrado)

                rodada++

                if (rodada == 4) {
                    alert("Você venceu")
                    break
                }
            }
        } else {
            alert("Valor inválido")
        }
    }
}