const bcrypt = require('bcrypt');

const password = '1234Segura!';

// Hash: Se opera un algoritmo para cambiar un texto a una cadena de caracteres que no tengan que ver
bcrypt.hash(password, 5, (err, hash) => {
  hashPass = hash;
  console.log(hashPass)
  // console.log(hash);
  // Compara si ese string puede llegara crear ese hash
  bcrypt.compare(password, hash, (error, res) => {
    console.log(res)  
  })
});