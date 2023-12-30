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
/*funcion obtener precios del nuevo carro*/
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

/***********************************/

function Servicio(servicio,precio){
    this.servicio= servicio;
    this.precio= precio;
}

var servicio1=new Servicio('Servicio1',10);
var servicio2=new Servicio('Servicio2',20);
var servicio3=new Servicio('Servicio3',30);
var servicio4=new Servicio('Servicio4',40);
var servicio5=new Servicio('Servicio5',50);

// Lista de servicios cargados previamente
var serviciosCargados = [
    servicio1,servicio2,servicio3,servicio4,servicio5
  ];
  
  // Lista donde se agregarán los servicios sin repetir
  var nuevaListaServicios = [];
  
  // Función para agregar servicios a la nueva lista sin repetir
  function agregarServicioSinRepetir(servicio) {
    // Verificar si el servicio ya existe en la nueva lista
    var servicioExistente = nuevaListaServicios.find(function (s) {
      return s.nombre === servicio.nombre && s.precio === servicio.precio;
    });
  
    // Agregar el servicio a la nueva lista solo si no existe
    if (!servicioExistente) {
      nuevaListaServicios.push(servicio);
      console.log('Servicio agregado:', servicio);
    } else {
      console.log('El servicio ya existe:', servicio);
    }
  }

  // Función para verificar si la lista de servicios está vacía
function nuevaListaServiciosEstaVacia() {
    return nuevaListaServicios.length === 0;
  }

  function menu() {
    let continuar = true;

    do {
        let opcion = prompt('Ingrese el servicio que desea contratar para su evento:\n' +
            '1.-Servicio de DJ\n' +
            '2.-Servicio de Vajilla\n' +
            '3.-Servicio de Limpieza\n' +
            '4.-Servicio de Cocina\n' +
            '5.-Servicio de Decoracion\n' +
            '0.-Ingrese Cero Para Salir');

        switch (opcion) {
            case '1':
                console.log("Servicio de DJ Contratado");
                alert("Servicio de DJ Contratado");
                if (nuevaListaServiciosEstaVacia() == 0) {
                    nuevaListaServicios[opcion] = servicio1;
                } else agregarServicioSinRepetir(servicio1);
                break;
            case '2':
                console.log("Servicio de Vajilla Contratado");
                alert("Servicio de Vajilla Contratado");
                if (nuevaListaServiciosEstaVacia() == 0) {
                    nuevaListaServicios[opcion] = servicio2;
                } else agregarServicioSinRepetir(servicio2);
                break;
            case '3':
                console.log("Servicio de Limpieza Contratado");
                alert("Servicio de Limpieza Contratado");
                if (nuevaListaServiciosEstaVacia() == 0) {
                    nuevaListaServicios[opcion] = servicio3;
                } else agregarServicioSinRepetir(servicio3);
                break;
            case '4':
                console.log("Servicio de Cocina Contratado");
                alert("Servicio de Cocina Contratado");
                if (nuevaListaServiciosEstaVacia() == 0) {
                    nuevaListaServicios[opcion] = servicio4;
                } else agregarServicioSinRepetir(servicio4);
                break;
            case '5':
                console.log("Servicio de Decoracion Contratado");
                alert("Servicio de Decoracion Contratado");
                if (nuevaListaServiciosEstaVacia() == 0) {
                    nuevaListaServicios[opcion] = servicio5;
                } else agregarServicioSinRepetir(servicio5);
                break;
            case '0':
                console.log("Gracias por contratar sus servicios");
                continuar = false; // Establece continuar en falso para salir del bucle
                break;
            default:
                // Mensaje para opciones no válidas
                console.log("Por favor, ingresa una opción válida.");
                break;
        }
    } while (continuar);
}

// Función para calcular la suma de los precios en la nueva lista de servicios
function calcularSumaPrecios() {
    var sumaPrecios = 0;
  
    // Iterar sobre la nueva lista de servicios y sumar los precios
    for (var i = 0; i < nuevaListaServicios.length; i++) {
      sumaPrecios += nuevaListaServicios[i].precio;
    }
  
    return sumaPrecios;
  }

// Función para eliminar un servicio de la nueva lista
function eliminarServicio(servicio) {
    // Encontrar el índice del servicio en la nueva lista
    var index = nuevaListaServicios.findIndex(function (s) {
      return s.nombre === servicio.nombre && s.precio === servicio.precio;
    });
  
    // Si se encuentra el servicio, eliminarlo
    if (index !== -1) {
      nuevaListaServicios.splice(index, 1);
      console.log('Servicio eliminado:', servicio);
    } else {
      console.log('El servicio no se encuentra en la lista:', servicio);
    }
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

    menu();
    calcularSumaPrecios();

    console.log('Suma de precios en la nueva lista de servicios:', calcularSumaPrecios());

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


