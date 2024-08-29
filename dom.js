var texto = document.querySelector('h1')
texto.innerHTML = 'Buonasera Katusha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Inhaim!!"

function exibeTexto() {
    alert(`inhaim amapo`)
}

function exibeResultado() {
    var n1 = parseInt(prompt("Digite um numero:"))
    var n2 = parseInt(prompt("Digite outro numero:"))
    var resultado = n1 + n2

    alert(`A soma dos dois numeros digitados é ${resultado}`)
}

function apareceNome() {
    var nome = document.getElementById('nome').value
    var lastName = document.getElementById('sobrenome').value

    document.getElementById('nomeCompleto').value = (`${nome} ${lastName}`)
}