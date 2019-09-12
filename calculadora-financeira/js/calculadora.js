let display = document.querySelector('.display')
document.querySelector('.eraser').addEventListener('click', apagar)
document.querySelector('.ponto').addEventListener('click', ponto)
let nums = Array.from(document.querySelectorAll('.nums'))
nums.map(numero => numero.addEventListener('click', exibirNumero))
document.addEventListener('keydown', teclado)
let enter = Array.from(document.querySelectorAll('.enter'))
enter.map(et => et.addEventListener('click', guardarNumero))
let operadorClicado = Array.from(document.querySelectorAll('.basic-ops'))
operadorClicado.map(numero => numero.addEventListener('click', fazerConta))
let contarPontos = 0, operador = '', valor1, valor2, operadorTeclado, pontoTeclado, contarEntra = 0, n



class pilha {
    constructor() {
        this.stack = []
    }

    push(numero) {
        this.stack.push(numero)
    }

    pop() {
        return this.stack.pop()
    }

    isEmpty() {
        return this.stack.length === 0
    }
}

let novoNumero = new pilha()

function exibirNumero() {
    let numero = event.target.innerText

    if (contarEntra >= 1) {
        display.innerText = ''
        contarEntra = 0
    }

    if (display.innerText.length < 20) {
        display.innerText += numero
    } else {
        return
    }

}

function teclado() {
    let tecla = event.key
    let teclaNum = event.keyCode

    if (tecla == '8' || teclaNum >= 48 && teclaNum <= 57 && teclaNum != 56) {
        if (display.innerText.length < 20) {
            display.innerText += tecla
        } else {
            return
        }
    } else if (tecla == '=' || tecla == 'Enter') {
        guardarNumero()
    } else if (tecla == '+' || tecla == '-' || tecla == '*' || tecla == '/') {
        operadorTeclado = event.key
        fazerConta()
    } else if (tecla == '.') {
        pontoTeclado = tecla
        ponto()
    }
}

function guardarNumero() {
    novoNumero.push(display.innerText)
    contarEntra++
    console.log(novoNumero)
    contarPontos = 0
}

function fazerConta() {
    let ops = event.target.innerText
    let conta = 0
    contarEntra = 0

    if (novoNumero.isEmpty()) {
        return
    }

    valor1 = novoNumero.pop()
    valor2 = display.innerText

    if (ops == '+' || operadorTeclado == '+') {
        conta = Number(valor1) + Number(valor2)
    } else if (ops == '-' || operadorTeclado == '-') {
        conta = Number(valor1) - Number(valor2)
    } else if (ops == 'x' || operadorTeclado == '*') {
        conta = Number(valor1) * Number(valor2)
    } else if (ops == '÷' || operadorTeclado == '/') {
        if (valor1 == 0 || valor2 == 0) {
            display.innerText = 'error'
            return
        } else {
            conta = Number(valor1) / Number(valor2)
        }
    } else if (ops == '%') {
        conta = (valor1 * valor2) / 100
    }




    display.innerText = conta
}

function apagar() {
    display.innerText = ''
    contarPontos = 0
}

function ponto() {
    let pontoClick = event.target.innerText

    if (contarPontos >= 1) {
        return
    } else {
        contarPontos++

        if (pontoTeclado == '.') {
            display.innerText += pontoTeclado
        } else if (pontoClick == '.') {
            display.innerText += pontoClick
        }
    }

    if (display.innerText == '.') {
        display.innerText = '0.'
    }
}








