const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é considerado trabalho infantil?",
        alternativas: [
            {
                texto: "Ralizado por crianças menores de 12 anos",
                afirmacao: "errado"
            },
            {
                texto: "Realizado por crianças ou adolescentes com idade inferior a 16 anos",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Qual é a idade mínima para o trabalho doméstico?",
        alternativas: [
            {
                texto: "12 anos",
                afirmacao: "errado"
            },
            {
                texto: "18 anos",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Por que a idade minima para o trabalho domestico é superior?",
        alternativas: [
            {
                texto: "Por questões historicas",
                afirmacao: "errado"
            },
            {
                texto: "Por riscos ocupacionais associados",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Quem pode ser considerado trabalhador doméstico",
        alternativas: [
            {
                texto: "Motorista particular",
                afirmacao: "errado"
            },
            {
                texto: "Babá",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Quem pode dar essa autorização?",
        alternativas: [
            {
                texto: "O ministério do trabalho",
                afirmacao: "errado"
            },
            {
                texto: "O juiz do Trabalho",
                afirmacao: "certo"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
