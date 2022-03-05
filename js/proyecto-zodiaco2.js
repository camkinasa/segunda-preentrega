class Consultante{
    constructor(nombre, dia, mes, signo){
        this.nombre = nombre;
        this.dia = dia;
        this.mes = mes;
        this.signo = signo;
    }

    consultar() {
        console.log(`${this.consultante} ha ingresado sus datos correctamente`)
    }
}

let arrayConsultantes = [];

if(localStorage.getItem('consultantes')) {
    arrayConsultantes = JSON.parse(localStorage.getItem('consultantes'))
} else {
    localStorage.setItem('consultantes', JSON.stringify(arrayConsultantes))
}

let formulario = document.getElementById("idForm")
let botonMostrarConsultantes = document.getElementById("botonMostrarConsultantes")
let divConsultantes = document.getElementById("divConsultantes")

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById("idName").value;
    let dia = document.getElementById("idDia").value;
    let mes = document.getElementById("idMes").value;
    let signo = zodiaco(dia, mes)
    if(nombre != ""){
        const consultante = new Consultante(nombre, dia, mes, signo);
        arrayConsultantes.push(consultante);
        localStorage.setItem('consultantes', JSON.stringify(arrayConsultantes));
        formulario.reset();
    }

})

botonMostrarConsultantes.addEventListener('click', () => {
    arrayConsultantes.forEach((consultanteEnArray, indice)  => {
        divConsultantes.innerHTML += `
            <div class="card" id="consultante${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${consultanteEnArray.nombre}</h5>
                    <p class="card-text">Dia de nacimiento: ${consultanteEnArray.dia}</p>
                    <p class="card-text">Mes de nacimiento: ${consultanteEnArray.mes}</p>
                    <p class="card-text">Signo: ${consultanteEnArray.signo}</p>
                    <button id="boton${indice}" class="btn btn-dark">Eliminar</button>
                </div>
            </div>
        
        `
    })
})

function zodiaco(dia, mes){
    let resultadoSigno = "";
    if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        resultadoSigno = "Aries";
        return resultadoSigno;
    }
    else if((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)){
        resultadoSigno ="Tauro";
        return resultadoSigno;
    }
    else if((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)){
        resultadoSigno = "Géminis";
        return resultadoSigno;
    }
    else if((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)){
        resultadoSigno = "Cáncer";
        return resultadoSigno;
    }
    else if((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)){
        resultadoSigno = "Leo";
        return resultadoSigno;
    } 
    else if((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)){
        resultadoSigno = "Virgo";
        return resultadoSigno;
    }
    else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
        resultadoSigno = "Libra";
        return resultadoSigno;
    }
    else if((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)){
        resultadoSigno = "Escorpio";
        return resultadoSigno;
    }
    else if((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)){
        resultadoSigno = "Sagitario";
        return resultadoSigno;
    }
    else if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
        resultadoSigno = "Capricornio";
        return resultadoSigno;
    }
    else if((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)){
        resultadoSigno = "Acuario";
        return resultadoSigno;
    }
    else if((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)){
        resultadoSigno = "Piscis";
        return resultadoSigno;
    }
}