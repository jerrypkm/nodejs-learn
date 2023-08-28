const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('----------------------')

// Información básica del sistema operativo
console.log('Sistema operativo:', os.platform())
console.log('Versión del sistema operativo:', os.release())
console.log('Arquitectura del sistema:', os.arch())
console.log('Memoria total del sistema (MB):', os.totalmem() / 1024 / 1024)
console.log('Memoria libre del sistema (MB):', os.freemem() / 1024 / 1024)
console.log('Número de CPUs:', os.cpus().length)
console.log('Tiempo de sistema encendido (hrs):', os.uptime() / 60 / 60)

// Información sobre la red
const networkInterfaces = os.networkInterfaces()
console.log('Interfaces de red disponibles:')
console.log(networkInterfaces)

// Información sobre el usuario actual
console.log('Nombre de usuario:', os.userInfo().username)
console.log('Directorio de inicio del usuario:', os.userInfo().homedir)
