// argumentos de entrada al ejecutar el comando
// node process.js Hooal
console.log(process.argv)

// Controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// Ruta o directorio desde donde se ejecuta el proceso
console.log(process.cwd())

// //Controlar el procesos y su salida (termina el proceso con 1)
// process.exit(1);

// platform
// console.log(process.env.PEPITO);
