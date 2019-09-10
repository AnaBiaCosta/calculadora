// TELA
let display = document.querySelector('.display')

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
let v2, contarPontos = 0, operador = '', mais, menos, vezes, dividir



//CLASSE DA PILHA
class pilha{
    constructor(){
        this.stack = []
    }

    push(numero){
        this.stack.push(numero)
    }

    pop(){
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
}


function fazerConta(){
    let ops = event.target.innerText
    let conta = 0
    let valor2 = novoNumero.pop()


    if(ops == '+'){
        

        conta = Number(valor2) + Number(display.innerText)

        console.log('Sou o resultado da conta ' + conta)
    }

    display.innerText = conta

}



