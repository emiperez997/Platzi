class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
  }
}

const autito = new Auto('Toyota', 'Corola', 2020)

console.log(autito.marca)