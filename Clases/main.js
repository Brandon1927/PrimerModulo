let entradaUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar = document.getElementById("btnPar")
let salidaPar = document.getElementById("salidaPar")
let salidaEsPar = document.getElementById("salidaEsPar")
let entradaNombreUsuario = document.getElementById("entradaNombreUsuario")
let numeroEjercicioEsPar = 0
let nombreUsuario = ""

entradaUsuarioPar.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numeroEjercicioEsPar = evento.target.value
})

entradaNombreUsuario.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    nombreUsuario = evento.target.value
})

function esPar(numero){
    if(numero % 2 == 0){
        return "es par"
    }
    else{
        return "no es par"
    }
}

btnPar.addEventListener("click",()=>{
    const resultado = esPar(numeroEjercicioEsPar)
    salidaEsPar.value = "El número " + numeroEjercicioEsPar + " " + resultado
    console.log(esPar(resultado))
    // let hijo = document.createElement("h4") agregarle un hijo
    // hijo.innerHTML = resultado entrar en el archivo HTML
    // salidaPar.appendChild(hijo) agregarle el texto a la nueva h4 de nombre hijo
})