let numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)
let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
let igual = document.querySelector('.igual').addEventListener('click', fazerConta)
document.querySelector('.eraser').addEventListener('click', apagar)
// document.querySelector('.ponto').addEventListener('click', ponto)
document.addEventListener('keydown', teclado)



let contarPontos = 0
let v1
let v2
let operador
let apagador = ''
let operadorTeclado
let pontoTeclado
let pontoClick





// PEGAR OS VALORES DO TECLADO
function teclado() {
    let tecla = event.key
    let teclaNum = event.keyCode

    if (teclaNum >= 48 && teclaNum <= 57) {
        resultado.innerText += tecla
    }

    else if (tecla == 'Delete' || tecla == 'Backspace' || tecla == 'Escape') {
        apagador = tecla
        apagar()
    }

    else if (tecla == '=') {
        fazerConta()
    }

    else if (tecla == '.') {
        pontoTeclado = tecla
        ponto()
    }

    else if (tecla == '+' || tecla == '-' || tecla == '*' || tecla == '/') {
        operadorTeclado = event.key
        guardarOperadorTeclado()
    }
}


// // OPERADOR DO TECLADO
function guardarOperadorTeclado() {
    contarPontos = 0
    v1 = resultado.innerText
    operador = operadorTeclado
    resultado.innerText = ''
}





// GUARDA O PRIMEIRO NÚMERO
function guardarNumeros() {
    let clicado = event.target.innerText

    if (clicado != '.') {
        resultado.innerHTML += clicado
    } else if (clicado == '.') {
        pontoClick = clicado
        ponto()
    }
}

// GUARDA O OPERADOR
function guardarOperador(event) {
    contarPontos = 0
    v1 = resultado.innerText
    let clicado = event.target.innerText
    operador = clicado
    resultado.innerHTML = ''
}



// GUARDA O SEGUNDO VALOR
function guardar2() {
    v2 = resultado.innerHTML
}


// FAZ A CONTA
function fazerConta() {
    contarPontos = 0
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
        resultado.innerHTML = conta.toFixed(1)

        if (conta == 'Infinity') {
            resultado.innerHTML = 'Erro'
        }
    }
}


// APAGA OS RESULTADOS
function apagar() {
    let eraser = event.target.innerText
    contarPontos = 0

    if (eraser == 'C' || apagador == 'Delete' || apagador == 'Escape') {
        resultado.innerText = ''
    } else {
        resultado.innerText = resultado.innerText.slice(0, -1)
    }
}




// FUNÇÃO DO PONTO
function ponto() {
    console.log(pontoClick)


    if (contarPontos >= 1) {
        return
    } else {
        contarPontos++

        if (pontoTeclado == '.') {
            resultado.innerText += pontoTeclado
        } else if (pontoClick == '.') {
            resultado.innerText += pontoClick
        }
    }

    if (resultado.innerText == '.') {
        resultado.innerText = '0.'
    }
}

