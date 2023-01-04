const sharp = require('sharp');

sharp('./utiles/gatito.png')
  .resize(80)
  .grayscale()
  .toFile('./utiles/resized.png');