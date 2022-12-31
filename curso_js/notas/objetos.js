const miAuto = {
  // Propiedades
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2020,
  // No funciona con ES6 -> () => {}
  detallesDelAuto: function() {
    console.log(`Auto ${this.modelo} ${this.anio}`)
  }
}

// Aceder a una propiedad de mi objeto
console.log(miAuto.marca)
miAuto.detallesDelAuto()