let numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)
let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
let igual = document.querySelector('.igual').addEventListener('click', fazerConta)
document.querySelector('.eraser').addEventListener('click', apagar)
document.addEventListener('keydown', teclado)
document.querySelector('.close1').addEventListener('click', fechar1)
document.querySelector('.close2').addEventListener('click', fechar2)
document.querySelector('.close3').addEventListener('click', fechar3)


const popUp1 = document.querySelector('.pop-up-1')
const popUp2 = document.querySelector('.pop-up-2')
const popUp3 = document.querySelector('.pop-up-3')




let contarPontos = 0
let v1
let v2
let operador
let operadorTeclado
let apagador = ''
let pontoTeclado
let pontoClick



// PEGAR OS VALORES DO TECLADO
function teclado() {
    let tecla = event.key
    let teclaNum = event.keyCode


    if (tecla == '8' || teclaNum >= 48 && teclaNum <= 57 && teclaNum != 56) {

        if (resultado.innerText.length < 14) {
            resultado.innerText += tecla
        }
        else {
            popUp1.style.display = 'block'
            return
        }

    } else if (tecla == 'Delete' || tecla == 'Backspace' || tecla == 'Escape') {
        apagador = tecla
        apagar()
    } else if (tecla == '=' || tecla == 'Enter') {
        fazerConta()
    } else if (tecla == '.') {
        pontoTeclado = tecla
        ponto()
    } else if (tecla == '+' || tecla == '-' || tecla == '*' || tecla == '/') {
        operadorTeclado = event.key
        guardarOperadorTeclado()
    }
}


// OPERADOR DO TECLADO
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
        if (resultado.innerText.length < 14) {
            resultado.innerHTML += clicado
        } else {
            popUp1.style.display = 'block'
            return
        }
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
    let conta = 0


    guardar2()

    if (operador == '+') {
        conta = (Number(v1) + Number(v2))
        resultado.innerHTML = conta
    } else if (operador == '-') {
        conta = (Number(v1) - Number(v2))
        resultado.innerHTML = conta
    } else if (operador == 'x' || operador == '*') {
        conta = (Number(v1) * Number(v2))
        resultado.innerHTML = conta
    } else {

        if (v1 == "0" && v2 == "0") {
            resultado.innerText = 'Erro'
        } else {
            conta = (Number(v1) / Number(v2))

            if (conta % 2 == 0 || conta % 3 == 0 || conta % 5 == 0 || conta % 7 == 0) {
                resultado.innerHTML = conta
            } else {
                resultado.innerHTML = conta.toFixed(2)
            }

            if (conta == 'Infinity') {
                resultado.innerHTML = 'Erro'
                popUp2.style.display = 'block'
            }
        }
    }


    let contaString = String(conta)
    if (conta > 9007199254740991) {
        resultado.innerHTML = 'Erro'
    }

    if (contaString.length > 14) {
        resultado.innerHTML = `${contaString.slice(0, -10)}e+`
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

    if (contarPontos >= 1) {
        popUp3.style.display = 'block'
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



function fechar1() {
    popUp1.style.display = 'none'
}
function fechar2() {
    popUp2.style.display = 'none'
}
function fechar3() {
    popUp3.style.display = 'none'
}
