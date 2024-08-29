var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Buonasera Katusha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Olá, vamos iniciar um programinha para calcular o seu IMC!!!"


function exibeInfos() {
    var nome = document.getElementById('nome').value
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var imc = peso / (altura * altura)

    document.getElementById('nomeImc').value = (`${nome} seu IMC é ${imc.toFixed(2)}`)

    exibeParametros(imc);
}

    function exibeParametros(imc) {

        if (imc < 18.5) {
            document.getElementById('parametros').value = (`Você está abaixo do peso ideal`)

        }
        else if (imc >= 18.5 && imc <= 24.90) {
            document.getElementById('parametros').value = (`Parabéns, você está em seu peso normal!!`)
        }
        else if (imc >= 25.9 && imc <= 29.9) {
            document.getElementById('parametros').value = (` Você esta com sobrepeso !`)
        }
        else if (imc >= 30 && imc <= 34.90) {
            document.getElementById('parametros').value = (` Obesidade grau I`)
        }

        else if (imc >= 35 && imc <= 39.9) {
            document.getElementById('parametros').value = (`Obesidade grau II`)
        }
        else if (imc >= 40) {
            document.getElementById('parametros').value = (` Obesidade grau III`)
        }
    }

