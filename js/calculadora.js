let numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)
let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
let igual = document.querySelector('.igual').addEventListener('click', fazerConta)
document.querySelector('.eraser').addEventListener('click', apagar)
document.querySelector('.ponto').addEventListener('click', ponto)
document.addEventListener('keydown', teclado)



let contar_pontos = 0
let v1
let v2
let operador
let apagador = ''
let operadorTeclado
let pontoTeclado


// PEGAR OS VALORES DO TECLADO
function teclado() {
    let tecla = event.key
    apagador = tecla

    if (tecla == '0' || tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6'
        || tecla == '7' || tecla == '8' || tecla == '9') {
        resultado.innerText += tecla
    }

    else if (tecla == 'Delete' || tecla == 'Backspace' || tecla == 'Escape') {
        apagador = tecla
        apagar()
    }

    else if (tecla == '=') {
        fazerConta()
    }

    else if(tecla == '.'){
        resultado.innerText += tecla
        pontoTeclado = tecla

        if (contar_pontos > 1) {
            event.preventDefault()
        }
        ponto()
    }

    else if(tecla == '+' || tecla == '-' || tecla == '*' || tecla == '/') {
        operadorTeclado = event.key
        guardarOperadorTeclado()
    }
}


// // OPERADOR DO TECLADO
function guardarOperadorTeclado() {
    contar_pontos = 0
    v1 = resultado.innerText
    operador = operadorTeclado
    resultado.innerText = ''
}

// GUARDA O PRIMEIRO NÚMERO
function guardarNumeros() {
    let clicado = event.target.innerText
    resultado.innerHTML += clicado
}


// GUARDA O OPERADOR
function guardarOperador(event) {
    contar_pontos = 0
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
    contar_pontos = 0
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

    if (eraser == 'C' || apagador == 'Delete' || apagador == 'Escape') {
        resultado.innerText = ''
        contar_pontos = 0
    } else {
        resultado.innerText = resultado.innerText.slice(0, -1)
    }
}




// FUNÇÃO DO PONTO
function ponto() {
    contar_pontos++
    console.log('tela ' + resultado.innerText)


    if (event.target.innerText == '.' && resultado.innerText == '') {
        resultado.innerHTML = '0'
    }
    else if(pontoTeclado == '.' && resultado.innerText == '.') {
        resultado.innerHTML = '0.'
    }

  
}

