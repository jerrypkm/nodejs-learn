const net = require('node:net') // Protocolo TCP

function findAvaliablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvaliablePort(desiredPort + 1).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvaliablePort }
