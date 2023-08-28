import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([firstText, secondText]) => {
  console.log('texto - 1: \n', firstText)
  console.log('texto - 2: \n', secondText)
})

console.log('Hago algo mientras eso ocurre')
