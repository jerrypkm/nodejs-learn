const http = require('node:http')
const { findAvaliablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hola mundo')
})

findAvaliablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening in port http://localhost:${server.address().port}`)
  })
})
