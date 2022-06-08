function credito() {
  let username = prompt("Por favor, ingrese su nombre:")
  let paisIngresado = prompt('Introduzca su pais')
  let importeInt = calcularInteres(paisIngresado)
  let creditoAceptado = false;

  while (!creditoAceptado) {

    let monto = parseInt(prompt("Ingrese el monto del credito!"))
    let montoPermitido = (monto < 2000000);

     while (!montoPermitido) {
      monto = parseInt(prompt("Ingreso un monto menor a 2.000.000, por favor ingrese uno nuevo."))
      montoPermitido = (monto < 2000000);
    }

    let meses = parseInt(prompt("Ingrese la cantidad de cuotas a pagar!"))
    let impuestoTotal = (0.30 + importeInt)
    let resultadoTotal = (monto * impuestoTotal)
    let resultadoPorMes = ((monto * impuestoTotal)/meses) 

    creditoAceptado = confirm(username + (", Usted en total pagara: " + resultadoTotal))

    if (creditoAceptado)
      alert("Credito aceptado! Usted pagara: " + resultadoPorMes + " por mes. ¡Gracias por confiar!");
  }
}
const paises = [{
  id: 1,
  nombre: "Argentina",
  importe: 1.21,
}, {
  id: 2,
  nombre: "Colombia",
  importe: 1.31,
}, {
  id: 3,
  nombre: "Chile",
  importe: 1.91,
}, {
  id: 4,
  nombre: "Brasil",
  importe: 1.41,
}, {
  id: 5,
  nombre: "Venezuela",
  importe: 1.51,
}]

function calcularInteres(paisIngresado) {
  let resultadoBusqueda = paises.find(pais => pais.nombre === paisIngresado)

  if (resultadoBusqueda) {
    return resultadoBusqueda.importe
  } else {
    alert("Solo los siguientes paises estan habilitados: Argentina, Brasil, Chile, Uruguay, Venezuela")
  }
    const idsOrden = paises.map(function(ids){
    return ids.id
})

console.log(idsOrden)

}

credito()

// estaria faltando un array, un metodo para recorrerlo, 
// puede ser el metodo “map” o mediante algun bucle tipo “forEach, for, for of.. for in..” 
// y un metodo de filtrado que seria el metodo “filter o find”
