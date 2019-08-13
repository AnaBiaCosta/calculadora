// function calc(x1, x2){
//     return x1 + x2
// }

// let resultado = somar(1, 2)
// console.log(resultado)



// function calc(x1, x2, operador){
//     return eval(`${x1} ${operador} ${x2}`)
//     // Transforma string em number
// }

// let resultado = calc(1, 2, '+')
// console.log(resultado)




// ARROW FUNCTION

// let calc = (x1, x2, operador) => {
//     return eval(`${x1} ${operador} ${x2}`)
// }

// let resultado = calc(1, 2, '+')
// console.log(resultado)



//EVENTO
// window.addEventListener('focus', event => {
//     console.log("focus")
// })


// document.addEventListener('click', event =>{
//     console.log("clicou")
// } )



// DATA E HORÁRIO
// let agora = new Date()
// console.log(agora)

// console.log(agora.getDate())
// console.log(agora.getFullYear())
// console.log(agora.getMonth())


// console.log(agora.toLocaleDateString("pt-br"))




// ARRAY
// let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}]

// carros.forEach(function(value, index){
//     console.log(index, value)
// });


// let amigas = ["Camila", "Pietra", "Alexandre", "Helen"]

// amigas.forEach(function(valores, index){
//     console.log(index, valores)
// })



// ORIENTAÇÃO À OBJETOS
// let celular = function(){
//     this.cor = "prata"


//     this.ligar = function(){
//         console.log("uma ligação")
//         return "Ligando..."
//     }
// }

// let objeto = new celular();
// console.log(objeto.ligar())



// FORMA NOVA
// class celular {
//     constructor(){
//         this.cor = "prata"
//     }

//     ligar(){
//         console.log("uma ligação")
//         return "Ligando..."
//     }

// }

// let objeto = new celular();
// console.log(objeto.ligar())
