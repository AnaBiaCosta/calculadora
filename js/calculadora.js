let numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)
let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
let igual = document.querySelector('.igual').addEventListener('click', fazerConta)
document.querySelector('.eraser').addEventListener('click', apagar)
document.querySelector('.ponto').addEventListener('click', ponto)


document.addEventListener('keydown', tecla)


function tecla() {
    resultado.innerText += event.key1234


    // if (tecla_pressionada == 48) {
    //     resultado.innerHTML += 0
    // } else if (tecla_pressionada == 49) {
    //     resultado.innerHTML += 1
    // } else if (tecla_pressionada == 50) {
    //     resultado.innerHTML += 2
    // } else if (tecla_pressionada == 51) {
    //     resultado.innerHTML += 3
    // } else if (tecla_pressionada == 52) {
    //     resultado.innerHTML += 4
    // } else if (tecla_pressionada == 53) {
    //     resultado.innerHTML += 5
    // } else if (tecla_pressionada == 54) {
    //     resultado.innerHTML += 6
    // } else if (tecla_pressionada == 55) {
    //     resultado.innerHTML += 7
    // } else if (tecla_pressionada == 56) {
    //     resultado.innerHTML += 8
    // } else if (tecla_pressionada == 57) {
    //     resultado.innerHTML += 9
    // }else if (tecla_pressionada == 27) {
    //     resultado.innerHTML = ' '
    // }
    //  else if(tecla_pressionada == 27 || tecla_pressionada == 46){
    //     resultado.innerText = ''
    // }

    // else if(tecla_pressionada == 8){
    //     resultado.innerText = resultado.innerText.slice(0, -1)
    // }

    // else{
    //     operadorTeclado = tecla_pressionada
    //     v1 = resultado.innerText
    //     resultado.innerText = ''
    // }
}




let contar_pontos = 0
let v1
let v2
let operador
let operadorTeclado





// GUARDA O PRIMEIRO NÚMERO
function guardarNumeros() {
    let clicado = event.target.innerText
    resultado.innerHTML += clicado
}



// GUARDA O OPERADOR
function guardarOperador(event) {

    operadorTeclado

    contar_pontos = 0
    let display = document.querySelector('#resultado').innerText
    v1 = display


    let clicado = event.target.innerText
    operador = clicado

    resultado.innerHTML = ''

    console.log(`Olha eu aqui ${operadorTeclado}`)
}



// GUARDA O SEGUNDO VALOR
function guardar2() {
    v2 = resultado.innerHTML
}



// FAZ A CONTA
function fazerConta() {12
    contar_pontos = 0
    guardar2()

    console.log(`TOTAL: ${v1}, ${operadorTeclado}, ${v2}`)

    if (operador == '+' || operadorTeclado == 43) {
        conta = (Number(v1) + Number(v2))
        resultado.innerHTML = conta
    } 
    
    else if (operador == '-' || operadorTeclado == 45) {
        conta = (Number(v1) - Number(v2))
        resultado.innerHTML = conta
    } 
    
    else if (operador == 'x' || operadorTeclado == 42) {
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

    if (eraser == 'C') {
        resultado.innerText = ''
        contar_pontos = 0
    } else {
        resultado.innerText = resultado.innerText.slice(0, -1)
    }
}




// FUNÇÃO DO PONTO
function ponto() {
    contar_pontos++


    if (event.target.innerText == '.' && resultado.innerText == '') {
        resultado.innerHTML = '0'
    }


    if (contar_pontos > 1) {
        resultado.innerText = 'Erro'
    }
}

