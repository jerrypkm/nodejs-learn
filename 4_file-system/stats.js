const fs = require('node:fs')

// Stats del archivo
const stats = fs.statSync('./archivo.txt') // Obtenemos la data de manera sincrona

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size // Tamaño en bytes
)
