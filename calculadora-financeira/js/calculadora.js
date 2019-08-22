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
let operador = Array.from(document.querySelectorAll('.basic-ops'))
operador.map(numero => numero.addEventListener('click', fazerConta))



let v1, v2, contarPontos = 0


function exibirNumero(){
    let numero = event.target.innerText
    
    if(display.innerText.length < 20){
        display.innerText += numero
    }else{
        console.log('eai')
        return
    }
}

function guardarNumero(){
    v1 = display.innerText
    display.innerText = ''
    contarPontos = 0
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



function apagar(){
    display.innerText = ''
    contarPontos = 0
}




function ponto() {
    let ponto = event.target.innerText

    if(contarPontos >= 1 ){
        return
    }else{
        contarPontos++
        display.innerText += ponto
    

        if(display.innerText == '.'){
            display.innerText = '0.'
        }
    }
}
