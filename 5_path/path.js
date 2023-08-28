const path = require('node:path')

// barra separador de carpetas según SO
console.log(path.sep)

const filePath = path.join('content', 'subcontent', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/section-secret-files/password.txt')
console.log(base)

const fileName = path.basename('/tmp/section-secret-files/password.txt', '.txt')
console.log(fileName)

const ext = path.extname('image.jpg')
console.log(ext)
