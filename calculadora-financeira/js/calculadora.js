// TELA
let display = document.querySelector('.display')

//APAGAR
document.querySelector('.eraser').addEventListener('click', apagar)

//PONTO
document.querySelector('.ponto').addEventListener('click', ponto)

// NÚMEROS
let nums = Array.from(document.querySelectorAll('.nums'))
nums.map(numero => numero.addEventListener('click', exibirNumero))

// ENTER
let enter = Array.from(document.querySelectorAll('.enter'))
enter.map(et => et.addEventListener('click', guardarNumero))

// OPERADORES BÁSICOS
let operadorClicado = Array.from(document.querySelectorAll('.basic-ops'))
operadorClicado.map(numero => numero.addEventListener('click', fazerConta))

// DECLARAÇÃO DAS VARIÁVEIS
let contarPontos = 0, operador = '', mais, menos, vezes, dividir




//CLASSE DA PILHA
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
}



// FUNÇÃO PARA EXIBIR NÚMEROS NO DISPLAY
function exibirNumero() {
    let numero = event.target.innerText

    if (display.innerText.length < 20) {
        display.innerText += numero
    } else {
        return
    }
}



let novoNumero = new pilha()


// FUNÇÃO PARA GUARDAR OS NÚMEROS NUM ARRAY - ACIONADA PELO ENTER
function guardarNumero() {
    novoNumero.push(display.innerText)
    display.innerText = ''
    contarPontos = 0

    // console.log(novoNumero.length)
}




//FUNÇÃO QUE FAZ A CONTA - ACIONADA PELO OPERADOR
function fazerConta() {
    let ops = event.target.innerText
    let conta = 0
    let valor1 = novoNumero.pop()
    let valor2 = display.innerText


    if (novoNumero.stack.length == 0) {
        return
    } else {
        if (ops == '+') {
            mais++
            conta = Number(valor1) + Number(valor2)
        } else if (ops == '-') {
            menos++
            conta = Number(valor1) - Number(valor2)
        } else if (ops == '*') {
            vezes++
            conta = Number(valor1) * Number(valor2)
        } else if (ops == '÷') {
            dividir++
            conta = Number(valor1) / Number(valor2)
        }
        display.innerText = conta
    }
}




function apagar() {
    display.innerText = ''
    contarPontos = 0
}




function ponto() {
    let ponto = event.target.innerText

    if (contarPontos >= 1) {
        return
    } else {
        contarPontos++
        display.innerText += ponto


        if (display.innerText == '.') {
            display.innerText = '0.'
        }
    }
}







