//1-Crea  un  objeto  llamado  auto  que  tenga  algunas  características  como  el  color,  marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto

const auto = {
  color: "rojo",
  marca: "Chevrolet",
  modelo: "Camaro",
  encendido: false,

  llave() {
    if (this.encendido === false) {
      this.encendido = true;
      console.log("arrancando");
    } else {
      this.encendido === true;
      console.log("apagando motor");
    }
  },
};

//auto.llave()
//auto.llave()

//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades

const user = {
  titular: "Alex",
  saldo: 0,

  ingresar(cash) {
    this.saldo = cash;
    console.log(this.saldo);
  },
  extraer(cash) {
    if (this.saldo === 0 || cash > this.saldo) {
      console.log("no se puede realizar la extraccion");
    } else {
      this.saldo = this.saldo - cash;
    }
  },
  informar() {
    console.log(` su saldo es de ${this.saldo}$`);
  },
};
/*
user.ingresar(0)
user.ingresar(100)
user.extraer(500)
user.ingresar(1000)
user.extraer(500)
user.informar()
*/

//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos {
  constructor(ancho, altura) {
    this.altura = altura;
    this.ancho = ancho;
  }

  get area() {
    console.log(this.altura * this.ancho);
  }

  get perimetro() {
    console.log(this.ancho * 2 + this.altura * 2);
  }
  set alt (medida){
      this.altura = medida 
      console.log(this.altura)
  }
  set base (medida){
      this.ancho = medida
      console.log(this.ancho)
  }
  
}
/*
let rectangulo = new Rectangulos(20, 10);
rectangulo.perimetro;
rectangulo.area;
rectangulo.alt = 100
rectangulo.base = 1000
*/

//2Producto4-Escribe  una  clase  Producto  para  crear  objetos.  Estos  objetos,  deben  presentar  las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.Posteriormente, cree tres instancias de este objeto y guárdalas en un array.Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    
    constructor(codigo,nombre,precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }

    get datos(){
        console.log(`codigo = ${this.codigo},nombre = ${nombre} precio = ${this.precio}`)
    }

    
}

let productos = [new Producto(12,'cerveza',100),new Producto(23,'papas frita',50),new Producto(12312,'vasos',100)]
productos.datos