const tela = document.getElementById("tela")
const rock = document.getElementById("rock2")
const scis = document.getElementById("scis2")
const pape = document.getElementById("pape2")
const but = document.getElementById("but")
const btu1 = document.getElementById("btu1")
const btu2 = document.getElementById("btu2")
const btu3 = document.getElementById("btu3")

let computerC

// Função para mostrar a escolha do computador
function mostrarEscolhaComputador() {
    const imagens = [rock, scis, pape]
    const aleatorio = Math.floor(Math.random() * imagens.length)
    const imagemEscolhida = imagens[aleatorio]

    // Esconder todas as imagens antes de mostrar a escolhida
    imagens.forEach(img => {
        img.style.display = 'none'
    })

    // Mostrar a imagem escolhida
    imagemEscolhida.style.display = 'none'

    // Armazenar a escolha do computador
    computerC = imagemEscolhida.id
}

but.addEventListener("click", () => {
    mostrarEscolhaComputador()
})

// Função para determinar o resultado do jogo
function determinarResultado(playerC) {
   if (
        (playerC === "btu1" && computerC === "scis2") ||
        (playerC === "btu2" && computerC === "pape2") ||
        (playerC === "btu3" && computerC === "rock2")
    ) {
        alert("Vitoria")
        if (playerC === "btu1") {
            scis.style.display = 'block'
        } else if (playerC === "btu2") {
            pape.style.display = 'block'
        } else {
            rock.style.display = 'block'
        }
    } else {
        //fazer com que apareca a imagem hand2 de acordo com o empate ou derrota
        alert("Derrota ou Empate")
    }
}

// Adicionar eventos aos botões de escolha do jogador
btu1.addEventListener("click", () => {
    determinarResultado("btu1")
})

btu2.addEventListener("click", () => {
    determinarResultado("btu2")
})

btu3.addEventListener("click", () => {
    determinarResultado("btu3")
})
but.addEventListener("click", () => {
    tela.innerHTML = "Escolha"
})
btu1.addEventListener("click", () => {
    tela.innerHTML = ""
})
btu2.addEventListener("click", () => {
    tela.innerHTML = ""
})
btu3.addEventListener("click", () => {
    tela.innerHTML = ""
})