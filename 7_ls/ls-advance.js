const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(folder)
    files.forEach(file => {
      const filePath = path.join(folder, file)
      fs.stat(filePath)
    })
  } catch {
    console.error(pc.red(`Error al leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // Stat da info del archivo
    } catch {
      console.error(`No se ha podido obtener información del archivo ${filePath}`)
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? '/' : '-'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(25))} ${pc.green(fileSize.padStart(5))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
