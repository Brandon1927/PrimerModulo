let btnNumero = document.getElementById("btnNumero")
let entradaNumeroFlor = document.getElementById("entradaNumeroFlor")
let salidaFlor = document.getElementById("salidaFlor")
let entradaMultiplos = document.getElementById("entradaMultiplos")
let btnMultiplos = document.getElementById("btnMultiplos")
let salidaMultiplos = document.getElementById("salidaMultiplos")
// let multiplo2 = document.getElementById("multiplo2")
// let multiplo3 = document.getElementById("multiplo3")
// let multiplo4 = document.getElementById("multiplo4")
let numero1, numero2, numero3, numero4, resultado2, contador = 0
let numeroEntrada = 0

entradaNumeroFlor.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numeroEntrada = evento.target.value
})

entradaMultiplos.addEventListener("input",(evento1)=>{
    console.log(evento1.target.value)
    resultado2 = evento1.target.value
})

// multiplo2.addEventListener("input",(evento2)=>{
//     console.log(evento2.target.value)
//     numero2 = evento2.target.value
// })

// multiplo3.addEventListener("input",(evento3)=>{
//     console.log(evento3.target.value)
//     numero3 = evento3.target.value
// })

// multiplo4.addEventListener("input",(evento4)=>{
//     console.log(evento4.target.value)
//     numero4 = evento4.target.value
// })

btnMultiplos.addEventListener("click", ()=>{
    const resultado = resultado2;

    if(!isNaN(resultado)){
        contador++;

        switch(contador){
            case 1:
                numero1 = resultado;
                entradaMultiplos.placeholder = "Ingresa el siguiente multiplo 2"
                salidaMultiplos.value = "El primer multiplo es: " + numero1
                let hijo2 = document.createElement("h4")
                hijo2.innerHTML = salidaMultiplos.value
                salidaMultiplos.appendChild(hijo2)
                break;
            case 2:
                numero2 = resultado;
                entradaMultiplos.placeholder = "Ingresa el siguiente multiplo 3"
                salidaMultiplos.value = "El segundo multiplo es: " + numero2
                let hijo3 = document.createElement("h4")
                hijo3.innerHTML = salidaMultiplos.value
                salidaMultiplos.appendChild(hijo3)
                break;
            case 3:
                numero3 = resultado;
                entradaMultiplos.placeholder = "Ingresa el siguiente multiplo 4"
                salidaMultiplos.value = "El tercer multiplo es: " + numero3
                let hijo4 = document.createElement("h4")
                hijo4.innerHTML = salidaMultiplos.value
                salidaMultiplos.appendChild(hijo4)
                break;
            case 4:
                numero4 = resultado;
                entradaMultiplos.placeholder = "Todos los valores fueron ingresados"
                salidaMultiplos.value = "El cuarto multiplo es: " + numero4
                let hijo5 = document.createElement("h4")
                hijo5.innerHTML = salidaMultiplos.value
                salidaMultiplos.appendChild(hijo5)
                btnMultiplos.disabled = true;
                entradaMultiplos.disabled = true;
                break;
            default:
                salidaMultiplos.textContent = "Error inesperado.";
                entradaMultiplos.value = "";
                return;
        }
        entradaMultiplos.value = "";
    }
})

function laFlor(numero){
    if(numero1, numero2, numero3, numero4 == 0){
        if((numero % 3 == 0 && numero % 5 == 0)&&
            (numero % 6 == 0 && numero % 7 == 0)){
            return "Violeta"
        }
        else if(numero % 6 == 0 && numero % 7 == 0){
            return "Rosa"
        }else if(numero % 3 == 0 && numero % 5 == 0){
            return "Margarita"
        }else{
            return "Ninguna flor"
        }
    }else if((numero % numero1 == 0 && numero % numero2 == 0)&&
                (numero % numero3 == 0 && numero % numero4 == 0)){
        return "Violeta"
    }else if(numero % numero3 == 0 && numero % numero4 == 0){
        return "Rosa"
    }else if(numero % numero1 == 0 && numero % numero2 == 0){
        return "Margarita"
    }else{
        return "Ninguna"
    }
}

btnNumero.addEventListener("click",()=>{
    const resultado1 = laFlor(numeroEntrada)
    salidaFlor.value = "La flor es: " + resultado1
    let hijo1 = document.createElement("h4")
    hijo1.innerHTML = salidaFlor.value
    salidaFlor.appendChild(hijo1)
    entradaNumeroFlor.value = "Ingresa un número"
})