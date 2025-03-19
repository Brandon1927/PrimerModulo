let entradaMultiplos = document.getElementById("entradaMultiplos")
let salidaMultiplos = document.getElementById("salidaMultiplos")
let btnMultiplos = document.getElementById("btnMultiplos")
let numeroEjercicioEsMultiplo = 0

entradaMultiplos.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numeroEjercicioEsMultiplo = evento.target.value
})

function esMultiplo(numero){
    if((numero % 3 == 0) && (numero % 5 == 0)){
        return "FizzBuzz"
    } else if(numero % 3 == 0){
        return "Fizz"
    } else if(numero % 5 == 0){
        return "Buzz"
    } else{
        return numero
    }
}

btnMultiplos.addEventListener("click", ()=>{
    for(let i = 1; i <= numeroEjercicioEsMultiplo; i++){
        let resultado = esMultiplo(i);
        let p = document.createElement("p"); // Crear un elemento <p>
        p.textContent = `${i}) ${resultado}`; // Asignar el texto
        salidaMultiplos.appendChild(p); // Agregar al div
    }
})


