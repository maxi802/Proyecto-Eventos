// Función para obtener un número mayor que cero del usuario
function obtenerNumeroMayorQueCero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número válido mayor que cero.");
        }
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

// Función para obtener un array de servicios y precios del usuario
function obtenerServiciosYPrecios(numServicios) {
    let servicios = [];
    for (let i = 0; i < numServicios; ++i) {
        let nombreServicio = prompt(`Ingrese el nombre del Servicio ${i + 1}:`);
        let precio = parseFloat(prompt(`Ingrese el precio de ${nombreServicio}:`));
        servicios.push({ nombre: nombreServicio, precio: isNaN(precio) ? 0 : precio });
    }
    return servicios;
}

// Función para calcular la suma de los precios de los servicios
function calcularSumaServicios(servicios) {
    return servicios.reduce((acc, servicio) => acc + servicio.precio, 0);
}


// Función principal
function main() {
    // Saludo y solicitud para ingresar el nombre
    do {
        nombre = prompt('Bienvenido, ¿Cual es tu nombre?');
        if (nombre == null || nombre == '') {
            alert('Necesitas ingresar un nombre');
        }
    } while (nombre == null || nombre == '')
    alert('Hola ' + nombre);
    console.log(nombre);

    // Obtener el número de servicios (siempre mayor que cero)
    let numServicios = obtenerNumeroMayorQueCero("Ingrese el número de servicios a contratar:");

    // Obtener los servicios y sus precios
    let servicios = obtenerServiciosYPrecios(numServicios);

    // Calcular la suma de los precios de los servicios
    let suma = calcularSumaServicios(servicios);

    // Mostrar el resultado
    console.log(`La suma de los precios de los servicios contratados es: ${suma.toFixed(2)}`);
}

// Llamar a la función principal
main();



/*function menu(nombre,precio,servicio){
    menu = prompt('Ingrese el servicio que desea contratar para su evento:\n' +
        '1.-Servicio de DJ\n' +
        '2.-Servicio de Vajilla\n' +
        '3.-Servicio de Limpieza\n' +
        '4.-Servicio de Cocina\n' +
        '5.-Servicio de Decoracion\n' +
        '6.-Ingrese Cero Para Salir');

    do{
        switch(menu){
            case 1:
                console.log("Servicio de DJ Contratado");
                return menu;
                break;
            case 2:
                console.log("Servicio de Vajilla Contratado");
                return menu;
                break;
            case 3:
                console.log("Servicio de Limpieza Contrado");
                return menu;
                break
            case 4:
                console.log("Servicio de Cocina Contratado");
                return menu;
                break;
            case 5:
                console.log("Servicio de Decoracion Contratado");
                return menu;
                break;
            case 0:
                console.log("Gracias por contratar sus servicios");
                break;
            default:
                // Mensaje para opciones no válidas
                console.log("Por favor, ingresa una opción válida.");
                break;
        }
    }while(menu!==0);
}

function agregarservicios(menu,precio){
    let servicios = [];
    let precios = [];
    while(menu<=5 && tieneElementosRepetidos!=0){
        servicios[menu]=menu;
        precios[menu]=precio;
    }
    console.log("Ya se cargo el servicio")
}

function tieneElementosRepetidos(listaDeArrays) {
    // Crear un conjunto para almacenar elementos únicos
    let elementosUnicos = new Set();
  
    // Iterar sobre cada array en la lista
    for (let i = 0; i < listaDeArrays.length; i++) {
      let arrayActual = listaDeArrays[i];
  
      // Iterar sobre cada elemento en el array actual
      for (let j = 0; j < arrayActual.length; j++) {
        let elemento = arrayActual[j];
  
        // Verificar si el elemento ya está en el conjunto
        if (elementosUnicos.has(elemento)) {
          // Elemento repetido encontrado
          return 0;
        } else {
          // Agregar el elemento al conjunto si aún no está presente
          elementosUnicos.add(elemento);
        }
      }
    }
  
    // No se encontraron elementos repetidos
    return 1;
  }
*/