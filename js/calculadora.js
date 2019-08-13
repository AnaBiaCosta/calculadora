var numClick = document.querySelector('.nums').addEventListener('click', guardarNumeros)
let operacao = document.querySelector('.btn-opr').addEventListener('click', guardarOperador)
let igual = document.querySelector('.igual').addEventListener('click', fazerConta)
document.querySelector('.eraser').addEventListener('click', apagar)
document.querySelector('.ponto').addEventListener('click', ponto)

let contar_pontos = 0
let v1
let v2
let operador





// GUARDA O PRIMEIRO NÚMERO
function guardarNumeros() {
    let clicado = event.target.innerText
    resultado.innerHTML += clicado
}




// GUARDA O OPERADOR
function guardarOperador(event) {

    contar_pontos = 0
    let display = document.querySelector('#resultado').innerText
    v1 = display


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
    guardar2()

    if (operador == '+') {
        conta = (Number(v1) + Number(v2))
        resultado.innerHTML = conta
    }else if (operador == '-') {
        conta = (Number(v1) - Number(v2))
        resultado.innerHTML = conta
    }else if (operador == 'x') {
        conta = (Number(v1) * Number(v2))
        resultado.innerHTML = conta
    }else {
        conta = (Number(v1) / Number(v2))
        resultado.innerHTML = conta.toFixed(1)

        if (conta == 'Infinity'){
            resultado.innerHTML = 'Erro'
        }
    }
}



// APAGA OS RESULTADOS
function apagar(){

    let eraser = event.target.innerText

    if(eraser == 'C'){
        resultado.innerText = ''
    }else{
        resultado.innerText = resultado.innerText.slice(0, -1)
    }
}




// FUNÇÃO DO PONTO
function ponto(){
    contar_pontos++
    ponto = '.'
    resultado.innerHTML += ponto

    
    if(contar_pontos > 1){
        resultado.innerText = 'Erro'
    }

    if(resultado.innerText == '.'){
        resultado.innerHTML = '0.'
        console.log('passou aqui')
    }
}