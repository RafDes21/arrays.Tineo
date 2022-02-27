let eleccion = parseInt(prompt("        ****TIENDA DE BEBIDAS****\n Ingrese 1--si querés invertir\n ingrese 2-- si querés comprar"))

let unidades = [5, 10, 15, 20]

let precios = [100, 240, 300]
const ganancia = 5

class Bebidas {

    constructor(nombre, litros, precio, pago, vuelto) {
        this.nombre = nombre;
        this.litros = litros;
        this.precio = precio
        this.pago = pago
        this.vuelto = vuelto
        this.info = `Usted Pidió una ${this.nombre} de ${this.litros} litros con precio de ${this.precio} Pesos\n Usted pago con ${this.pago} Pesos\n Su vuelto es ${this.vuelto} Pesos`
    }

}

switch (eleccion) {

    case 1:

        alert("          ----BIENVENIDO EMPRENDEDOR/A---- \n |¬ Empresa Beverages\n |¬ Lo mejor de las bebidas")
        let cantidad = parseInt(prompt("Por cada bebida vendida usted GANARA el 5%\n las Opciones a Elegir son:\n 5 bebidas\n 10 bebidas\n 15 bebidas\n 20 bebidas\n ¿En cuántas bebidas desea invertir?"))
        let numero = unidades.includes(cantidad)

        if (numero == true) {
            let resultado = cantidad * ganancia
            alert(`por ${cantidad} bebibas usted obtendra una ganancia de ${resultado} pesos al mes.`)
            break

        } else {
            alert("ingrese un numero correcto")
            
            location.reload()
            break
        }

        


        case 2:
            let bebida = prompt("Ingrese la marca de la bebida")
            let litros = parseInt(prompt("Elija una opción: \n 1°--  0.5 litros = $100 \n 2°--  1 litro = 240 \n 3°--  2.5 litros = 300"))
            let pago = prompt("Con cuanto va a pagar")

            switch (litros) {
                case 1:

                    let precio = precios[0]
                    let vuelto = pago - precio
                    litros = 0.5
                    let bebidas1 = new Bebidas(bebida, litros, precio, pago, vuelto)
                    alert(bebidas1.info)


                    break;
                case 2:

                    let precio2 = precios[1]
                    let vuelto2 = pago - precio2
                    litros = 1
                    let bebidas2 = new Bebidas(bebida, litros, precio2, pago, vuelto2)
                    alert(bebidas2.info)
                    break;
                case 3:

                    let precio3 = precios[2]
                    let vuelto3 = pago - precio3
                    litros = 2.5
                    let bebidas3 = new Bebidas(bebida, litros, precio3, pago, vuelto3)
                    alert(bebidas3.info)
                    break;
                default:
                    break;
            }

}