// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
        "pergunta": "Qual é o nome original em coreano da série Round 6?",
        "respostas": 
        [
            {
                "opcao": "오징어 게임 (Ojingeo Geim)",
                "correto": true
            },
            {
                "opcao": "무궁화 꽃이 피었습니다 (Mugunghwa Kkochi Pieot Seumnida)",
                "correto": false
            },
            {
                "opcao": "달고나 (Dalgona)",
                "correto": false
            },
            {
                "opcao": "구슬치기 (Guseulchigi)",
                "correto": false
            },
            {
                "opcao": "딱지치기 (Ttakjichigi)",
                "correto": false
            }
        ]
    },
    {
        "pergunta": "Quantos jogadores são inicialmente convidados a participar dos jogos em Round 6?",
        "respostas": 
        [
            {
                "opcao": "100",
                "correto": false
            },
            {
                "opcao": "256",
                "correto": false
            },
            {
                "opcao": "456",
                "correto": true
            },
            {
                "opcao": "500",
                "correto": false
            },
            {
                "opcao": "999",
                "correto": false
            }
        ]
    },
    {
        "pergunta": "Qual é a moeda utilizada como prêmio acumulado nos jogos de Round 6?",
        "respostas": 
        [
            {
                "opcao": "Won",
                "correto": true
            },
            {
                "opcao": "Dólar",
                "correto": false
            },
            {
                "opcao": "Euro",
                "correto": false
            },
            {
                "opcao": "Iene",
                "correto": false
            },
            {
                "opcao": "Libra",
                "correto": false
            }
        ]
    },
    {
        "pergunta": "Qual é o formato geral da competição apresentada na série Round 6?",
        "respostas": 
        [
            {
                "opcao": "Um reality show de sobrevivência em uma ilha deserta.",
                "correto": false
            },
            {
                "opcao": "Uma série de desafios físicos e mentais com eliminação progressiva.",
                "correto": true
            },
            {
                "opcao": "Um torneio esportivo com regras complexas.",
                "correto": false
            },
            {
                "opcao": "Uma simulação de jogos de azar em grande escala.",
                "correto": false
            },
            {
                "opcao": "Uma competição artística com votação popular.",
                "correto": false
            }
        ]
    },
    {
        "pergunta": "Qual é a plataforma de streaming original de lançamento da série Round 6?",
        "respostas": 
        [
            {
                "opcao": "Amazon Prime Video",
                "correto": false
            },
            {
                "opcao": "Hulu",
                "correto": false
            },
            {
                "opcao": "Disney+",
                "correto": false
            },
            {
                "opcao": "Netflix",
                "correto": true
            },
            {
                "opcao": "HBO Max",
                "correto": false
            }
        ]
    }
]
// Perguntas geradas pelo Google Gemini 2.0 Flash utilizando o seguinte prompt: Formule 5 perguntas, contendo 5 alternativas sendo apenas uma delas correta sobre a série Round 6 da Netflix, é importante que não haja spoilers dos acontecimentos importantes da série nas perguntas e nas alternativas

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        // Pega a resposta atual com base no índice 'i'
        const resposta = perguntaAtual.respostas[i];
        // Cria um novo elemento 'button' (botão)
        const botao = document.createElement("button");
        // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
        botao.classList.add("botao-resposta");
        // Define o texto do botão com a opção de resposta (resposta.opcao)
        botao.innerText = resposta.opcao;
        // Adiciona um evento de clique no botão
        botao.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (resposta.correto) {
                acertos++; // Incrementa o contador de acertos
            }

            // Avança para a próxima pergunta
            indiceAtual++;

            // Se ainda houver perguntas, carrega a próxima pergunta
            if (indiceAtual < perguntas.length) {
                carregarPergunta(); // Carrega a próxima pergunta
            } else {
                // Se não houver mais perguntas, finaliza o jogo
                finalizarJogo();
            }
        };

        // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();