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

// estaria faltando un array, un metodo para recorrerlo, 
// puede ser el metodo “map” o mediante algun bucle tipo “forEach, for, for of.. for in..” 
// y un metodo de filtrado que seria el metodo “filter o find”



