class Equipo {
    constructor(base, escolta, alero, alapívot, pívot){
        this.base = base
        this.escolta = escolta
        this.alero = alero
        this.alapívot = alapívot
        this.pívot = pívot
    }
    mostrarPlantilla(){
        
    }
}

const jug1 = new Jugador ("Sthephen Curry", "Golden State Warriors", "Base")
const jug2 = new Jugador ("Donovan Mitchell", "Utah Jazz", "Escolta")
const jug3 = new Jugador ("LeBron James", "Los Ángeles Lakers", "Alero")
const jug4 = new Jugador ("Zion Williamson", "New Orleans Pelicans", "Ala-Pívot")
const jug5 = new Jugador ("Joel Embiid", "Philadelphia 76ers", "Pívot")


const destacados = []
destacados.push(jug1,jug2,jug3,jug4,jug5)

function Jugador(nombre, equipo, posición){
    this.nombre = nombre,
    this.equipo = equipo,
    this.posición = posición
    this.mostrarInfo = function(){
        alert(`El nominado es ${nombre}, juega en ${equipo} y su posición es ${posición}`)
    }
}

function mostrarJugadores(){
    destacados.forEach((jug)=>{
        jug.mostrarInfo()
    })

}

function buscarPorEquipo(){
    let buscarEquipo = prompt("Ingrese el equipo en el que juega su jugador favorito nominado al MVP")
    let equipoEncontrado = destacados.find((franquicia) => franquicia.equipo.toLowerCase() == buscarEquipo.toLowerCase())
    if(equipoEncontrado == undefined){
        alert("Ningún jugador de su equipo está nominado al MVP")
    }else{
        alert("Su jugador encontrado puede visualizarlo en la consola:")
        console.log(equipoEncontrado)
    }
}

function buscarPorPosicion(){
    let buscarPosicion = prompt("Ingrese la posición de su jugador favorito nominado al MVP")
    let buscar = destacados.filter((posi)=>posi.posición.toLowerCase() == buscarPosicion.toLowerCase())
    if(buscar.length == 0){
        alert("No hay ningún jugador nominado al MVP que juegue en esa posición")
    }else{
        alert("El jugador que juega en esa posición y está nominados al MVP es:")
        for(let jugadorEncontado of buscar){
            jugadorEncontado.mostrarInfo()
        }
    }
}

function nuevoJugador(){
    let jugadorIngresado = prompt("Ingrese el nombre del jugador")
    let equipoIngresado = prompt("Ingresar equipo del jugador")
    let posiciónIngresada = prompt("Ingrese la posición del jugador")
    let jugadorCreado = new Jugador (jugadorIngresado, equipoIngresado, posiciónIngresada)
    destacados.push(jugadorCreado)
}


function preguntarOpciones(){
    let opcion = parseInt(prompt(`Ingrese el número de la acción que desee realizar:
                        1 - Ver jugadores nominados al MVP
                        2 - Agregar un posible candidato al MVP
                        3 - Encontrar jugador por equipo:
                        4 - Encontrar jugador por posición:
                        0 - Para salir
                        `))
    menu(opcion)
}


function menu(opcionElegida){
    switch(opcionElegida){
        case 0:
            expulsar = true
            alert("Usted no ha elegido ninguna opción y será expulsado de la página")
        break
        case 1:
            mostrarJugadores()

        break
        case 2:
            nuevoJugador()

        break
        case 3:
            buscarPorEquipo()

        break
        case 4:
            buscarPorPosicion()

        break
        default:
        alert("Usted no ingresó una opción correcta. Vuelva a intentarlo.")
    }
}


let expulsar
while (expulsar != true) {
    preguntarOpciones()
}




























