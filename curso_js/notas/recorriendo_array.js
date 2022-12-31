const articulos = [
  { nombre: 'Bici', costo: 3000},
  { nombre: 'Tv', costo: 2500},
  { nombre: 'Libro', costo: 320},
  { nombre: 'Celular', costo: 10000},
  { nombre: 'Laptop', costo: 20000},
  { nombre: 'Teclado', costo: 500},
  { nombre: 'Audifonos', costo: 1700}
];

const articulo = articulos.find((articulo) => articulo.nombre === 'Laptop') // Devuelve el que cumple la condicion
console.log(articulo);

articulos.forEach((articulo) => console.log(articulo.nombre)) // Solo lo recorre

const articulosBaratos = articulos.some((articulo) => articulo.costo <= 700) // Devuelve Boolean

console.log(articulosBaratos)