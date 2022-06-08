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
    id: Du5sSkC6MW,
    nombre: "Argentina",
    importe: 1.21,
  }, {
    id: GuN8AIawqU,
    nombre: "Colombia",
    importe: 1.31,
  }, {
    id: SKCDgxtk,
    nombre: "Chile",
    importe: 1.91,
  }, {
    id: Qmur9vWsdF,
    nombre: "Brasil",
    importe: 1.41,
  }, {
    id: fRvFpMys3,
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
}
// EXTRAER DATOS DE OBJETOS - retorna el id de cada pais
const idPaises = paises.map(({ id }) => id);
console.log (idPaises)


credito()




// POSIBLE DESCUENTO
//   const paisesConDescuento = select.map(function (descuento){
//       if (select.importe > 1.50) return select;

//       return{
//           ...select,
//           importe: select.importe
//         };
//      });

  // CONSIGNA
  // estaria faltando un array, un metodo para recorrerlo,
  // puede ser el metodo “map” o mediante algun bucle tipo “forEach, for, for of.. for in..”
  // y un metodo de filtrado que seria el metodo “filter o find”
