const { readFile } = require('node:fs/promises');

// IIDE - Inmediatly Invoked Function Expression
(
  async () => {
    console.log('Leyendo el primer archivo...')

    const firstText = await readFile('./archivo.txt', 'utf-8')

    console.log('primer texto', firstText)

    console.log('Este código se ejecuta mientras se lee el archivo')

    console.log('Leyendo segundo archivo...')

    const secondText = await readFile('./archivo2.txt', 'utf-8')

    console.log('segundo texto', secondText)
  }
)()
