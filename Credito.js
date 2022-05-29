function credito() {


    let username = prompt("Por favor, ingrese su nombre:")
    let creditoAceptado = false;

    while(!creditoAceptado) {

        let monto = parseInt(prompt("Ingrese el monto del credito!")) 
        let montoPermitido = (monto < 300000);

        while(!montoPermitido){
            monto = parseInt(prompt("Ingreso un monto superior a 300.000, por favor ingrese uno nuevo.")) 
            montoPermitido = (monto < 300000);
        }

        let meses = parseInt(prompt("Ingrese la cantidad de cuotas a pagar!"))
        let plus = 1.50
        let resultadoTotal = (monto * plus)
        let resultadoPorMes = ((monto * plus)/meses) 


        creditoAceptado = confirm(username + (", Usted en total pagara: " + resultadoTotal))

        if(creditoAceptado)
            alert("Credito aceptado! Usted pagara: " + resultadoPorMes + " por mes. ¡Gracias por confiar!" ); 
    }
    

}

credito()



// >> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de
//  tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
// Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
// Armar la estructura HTML del proyecto.
// Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
// Utilizar funciones para realizar esas operaciones.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
// que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
// >>Ejemplo:
// Calcular costo total de productos y/o servicios seleccionados por el usuario.
// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
// Calcular edad promedio de personas registradas.
// Calcular nota final de alumnos ingresados.
