// TELA
let display = document.querySelector('.display')



// NÚMEROS
let nums = Array.from(document.querySelectorAll('.nums'))
nums.map(numero => numero.addEventListener('click', exibirNumero))



// ENTER
let enter = Array.from(document.querySelectorAll('.enter'))
enter.map(et => et.addEventListener('click', guardarNumero))



// OPERADORES BÁSICOS
let operador = Array.from(document.querySelectorAll('.basic-ops'))
operador.map(numero => numero.addEventListener('click', fazerConta))



let v1, v2


function exibirNumero(){
    let numero = event.target.innerText
    display.innerText += numero
}

function guardarNumero(){
    v1 = display.innerText
    display.innerText = ''
}

function guardarSegundoValor(){
    v2 = display.innerText
}


function fazerConta(){
    let ops = event.target.innerText

    guardarSegundoValor()
    
    if(ops == '+'){
        let conta = (Number(v1) + Number(v2))
        display.innerText = conta
    }else if(ops == '-'){
        let conta = (Number(v1) - Number(v2))
        display.innerText = conta
    }else if(ops == 'x'){
        let conta = (Number(v1) * Number(v2))
        display.innerText = conta
    }else if(ops == '÷'){
        let conta = (Number(v1) / Number(v2))
        display.innerText = conta
    }
}

