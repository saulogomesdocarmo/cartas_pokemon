/**
 * Sorteio de Cartas de Pokemon
 * @author Saulo Gomes do Carmo
 */


// Nomes dos Pokemons
let nomes = ["Pikachu", "Meowth", "Psyduck", "Bulbassauro", "Cartepie", "Mankey", "Squirtle", "Snorlax", "Evee", "Charmander"]
let frases = ["Bela escolha", "Isso ai,Boa Escolha", "Acertou em cheio", "Boa", "Escolheu bem", "Muito Bem", "Já estava na Hora", "Opa, sou eu ?", "Fala Mestre", "Isso ai", "toop"]



function sortear() {
    let nome = nomes[Math.floor(Math.random() * nomes.length)]
    let frase = frases[Math.floor(Math.random() * frases.length)]
    // console.log(`O Pokemon é: ${nome}`)

    document.getElementById('supEsq').innerHTML = `<div>${nome}</div>`

    // determinar foto do pokmento
    let foto = document.getElementById("foto")


    // LÓGICA PARA MUDAR DE COR O NOME
    if (nome === "Pikachu") {
        document.getElementById("infDir").style.color = "#FFD700"
        document.getElementById("supEsq").style.color = "#FFD700"
        document.getElementById("infDir").style.backgroundColor = "#000000"
        document.getElementById("supEsq").style.backgroundColor = "#000000"


    }
    if (nome === "Meowth") {
        document.getElementById("infDir").style.color = "#A0522D"
        document.getElementById("supEsq").style.color = "#A0522D"
        document.getElementById("infDir").style.backgroundColor = "#DEB887"
        document.getElementById("supEsq").style.backgroundColor = "#DEB887"

    }

    if (nome === "Psyduck") {
        document.getElementById("infDir").style.color = "#000000"
        document.getElementById("supEsq").style.color = "#000000"
        document.getElementById("infDir").style.backgroundColor = "#FFFF00"
        document.getElementById("supEsq").style.backgroundColor = "#FFFF00"
    }

    if (nome === "Bulbassauro") {
        document.getElementById("infDir").style.color = "#006400"
        document.getElementById("supEsq").style.color = "#006400"
        document.getElementById("infDir").style.backgroundColor = "#32CD32"
        document.getElementById("supEsq").style.backgroundColor = "#32CD32"
    }

    if (nome === "Cartepie") {
        document.getElementById("infDir").style.color = "#98FB98"
        document.getElementById("supEsq").style.color = "#98FB98"
        document.getElementById("infDir").style.backgroundColor = "#006400"
        document.getElementById("supEsq").style.backgroundColor = "#006400"
    }

    if (nome === "Mankey") {
        document.getElementById("infDir").style.color = "#D2691E"
        document.getElementById("supEsq").style.color = "#D2691E"
        document.getElementById("infDir").style.backgroundColor = "#DEB887"
        document.getElementById("supEsq").style.backgroundColor = "#DEB887"
    }

    if (nome === "Squirtle") {
        document.getElementById("infDir").style.color = "#FFFFFF"
        document.getElementById("supEsq").style.color = "#FFFFFF"
        document.getElementById("infDir").style.backgroundColor = "#4682B4"
        document.getElementById("supEsq").style.backgroundColor = "#4682B4"
    }

    if (nome === "Snorlax") {
        document.getElementById("infDir").style.color = "#4682B4"
        document.getElementById("supEsq").style.color = "#4682B4"
        document.getElementById("infDir").style.backgroundColor = "#D3D3D3"
        document.getElementById("supEsq").style.backgroundColor = "#D3D3D3"
    }

    if (nome === "Evee") {
        document.getElementById("infDir").style.color = "#8B4513"
        document.getElementById("supEsq").style.color = "#8B4513"
        document.getElementById("infDir").style.backgroundColor = "#F4A460"
        document.getElementById("supEsq").style.backgroundColor = "#F4A460"
    }

    if (nome === "Charmander") {
        document.getElementById("infDir").style.color = "#FF4500"
        document.getElementById("supEsq").style.color = "#FF4500"
        document.getElementById("infDir").style.backgroundColor = "#FFA500"
        document.getElementById("supEsq").style.backgroundColor = "#FFA500"
    }


    //logica para trocar a foto
    if (nome === "Pikachu") {
        foto.innerHTML = `<img src ="img/pikachu.png">`


    } else if (nome === "Meowth") {
        foto.innerHTML = `<img src ="img/meowth.png">`

    } else if (nome === "Psyduck") {
        foto.innerHTML = `<img src ="img/psyduck.png">`

    } else if (nome === "Bulbassauro") {
        foto.innerHTML = `<img src ="img/bubassauro.png">`

    } else if (nome === "Squirtle") {
        foto.innerHTML = `<img src = "img/squirtle.png">`

    } else if (nome === "Mankey") {
        foto.innerHTML = `<img src = "img/mankey.png">`

    } else if (nome === "Snorlax") {
        foto.innerHTML = `<img src = "img/snorlax.png">`

    } else if (nome === "Cartepie") {
        foto.innerHTML = `<img src = "img/cartepie.png">`

    } else if (nome === "Evee") {
        foto.innerHTML = `<img src = "img/evee.png">`

    } else if (nome === "Charmander") {
        foto.innerHTML = `<img src = "img/charmander.png">`
    }

    document.getElementById('infDir').innerHTML = `<div>${frase}</div>`
}