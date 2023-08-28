import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const firstText = await readFile('./archivo.txt', 'utf-8')
console.log('texto - 1: \n', firstText)

console.log('Este código se ejecuta mientras se lee el archivo')

console.log('Leyendo segundo archivo...')
const secondText = readFile('./archivo2.txt', 'utf-8')
console.log('texto - 2: \n', secondText)
