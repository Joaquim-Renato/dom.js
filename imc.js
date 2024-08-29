var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Buonasera Katusha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Olá, vamos iniciar um programinha para calcular o seu IMC!!!"



function exibeInfos() {
    var nome = document.getElementById('nome').value
    var peso = parseFloat (document.getElementById('peso').value)
    var altura = parseFloat (document.getElementById('altura').value)
    var imc = peso / (altura * altura)

document.getElementById('nomeImc').value = (`${nome} ${imc}`)
}

var textoFinal = document.querySelector('h2')
textoFinal.innerHTML = "Loren"
