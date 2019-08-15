var numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)

let v1 = ''
let v2 = ''
let operador = ''



function guardarNumeros() {
    let clicado = event.target.innerText
    resultado.innerHTML += clicado
}



let operacao = document.querySelector('.btn').addEventListener('click', guardarOperador)
function guardarOperador(event) {

    let display = document.querySelector('#resultado').innerText
    v1 = display


    let clicado = event.target.innerText
    operador = clicado

    console.log(`CHEGOU ${v1}`)

    resultado.innerHTML = ''
}



function guardar2() {
    v2 = resultado.innerHTML
}


let igual = document.querySelector('.igual').addEventListener('click', fazerConta)

function fazerConta() {

    guardar2()

    if (operador == '+') {
        conta = (Number(v1) + Number(v2))
        resultado.innerHTML = conta

    }

    else if (operador == '-') {
        conta = (Number(v1) - Number(v2))
        resultado.innerHTML = conta
    }

    else if (operador == 'x' || operador == '*') {
        conta = (Number(v1) * Number(v2))
        resultado.innerHTML = conta
    }

    else {
        conta = (Number(v1) / Number(v2))
        resultado.innerHTML = parseInt(conta)
    }
}
