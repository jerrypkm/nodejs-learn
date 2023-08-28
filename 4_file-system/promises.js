const fs = require('node:fs/promises')

// Forma alterna de convertir una función que usa callbacks en promesas
// const fs = require("node:fs")
// const { promisify } = require("node:util");
// const readFilePromise = promisify(fn.readFile);

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('texto - 1: \n', text)
  })

console.log('Este código se ejecuta mientras se lee el archivo')

console.log('Leyendo segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('texto - 2: \n', text)
  })
