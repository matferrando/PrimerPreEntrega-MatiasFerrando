const opcion1 = 4570
const opcion2 = 5700
const opcion3 = 6700


alert("Bienvenido a Fringe Menu!")
let nombre = prompt("Ingrese su nombre y apellido:")

while (nombre == ""){
    nombre = prompt ("Datos incorrectos. Ingrese nombre y apellido:")
}

alert ("Hola, " + nombre + "!")

function calcularMenu(){
    let opcion = prompt("Ingrese 1 para elegir menú y cualquier tecla para salir:")
    if (opcion == 1){
        let eleccion = prompt("Seleccione su Menu: \n1. Pizza y Cerveza\n2. Pastas y Vino\n3. Carne y Vino")
        switch(eleccion){
            case "1":
                alert(`El precio final de su menú es de: $${opcion1}`);
                break;
            case "2":
                alert(`El precio final de su menú es de: $${opcion2}`);
                break;
            case "3":
                alert(`El precio final de su menú es de: $${opcion3}`);
                break;
        }
    }
}

calcularMenu()
