const fs = require('node:fs')

// Leyendo archivo de forma síncrona

// const text = fs.readFileSync("./archivo.txt"); //Regresa por defecto un buffer (bytes)
console.log('Leyendo el primer archivo...')
const firstText = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(firstText)

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)

// Leyendo archivos de forma asíncrona

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  err && console.log('error: ', err)
  console.log('texto - 1: \n', text)
}) // Acepta como tercer parámetro un callback que se ejcuta cuando el proceso termine

console.log('Este código se ejecuta mientras se lee el archivo')

console.log('Leyendo segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  err && console.log('error: ', err)
  console.log('texto - 2: \n', text)
}) // Acepta como tercer parámetro un callback que se ejcuta cuando el proceso termine
