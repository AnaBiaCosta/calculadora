var numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)

let v1
let v2
let operador



function guardarNumeros() {
    let clicado = event.target.innerText
    resultado.innerHTML += clicado
}


let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
function guardarOperador(event) {
console.log('oi')
    let display = document.querySelector('#resultado').innerText
    v1 = display


    let clicado = event.target.innerText
    operador = clicado

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

    else if (operador == 'x') {
        conta = (Number(v1) * Number(v2))
        resultado.innerHTML = conta
    }

    else {
        conta = (Number(v1) / Number(v2))
        resultado.innerHTML = conta.toFixed(1)

        if (conta == 'Infinity'){
            resultado.innerHTML = 'Erro'
        }
    }
}



document.querySelector('.eraser').addEventListener('click', apagar)
function apagar(){

    let eraser = event.target.innerText

    if(eraser == 'C'){
        resultado.innerText = ''
    }

    else{
        resultado.innerText = resultado.innerText.slice(0, -1)
    }
}


document.querySelector('.ponto').addEventListener('click', ponto)
function ponto(){

    let ponto = event.target.innerText

    if( resultado.innerText = ' .'){
        resultado.innerText = '0'
    }


}