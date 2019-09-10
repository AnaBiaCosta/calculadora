// BOTÕES
document.querySelector('.btn1').addEventListener('click', guardar)
document.querySelector('.btn2').addEventListener('click', apagar)


let pilha = []

function guardar(){
    pilha.push(num.value)
    resultado.innerText = pilha
}

function apagar(){
    pilha.pop()
    resultado.innerText = pilha
}

