
const fs = require('fs')
const WebSocket = require('ws')

const main = () => {
  const ws = new WebSocket('ws://ws-server:8080')

  const file = process.env.FILE? process.env.FILE : './input.json'
  console.log(`Reading file: ${file}`)

  fs.readFile(file, 'utf8', (error, content)=>{
    if (!error){
      console.log(content)

      ws.on('open', () => {
        console.log('Connection is ready')
        ws.send(content)
      })
      
      ws.on('message', (data) => {
        console.log(data)
      })

    } else {
      console.log(error)
    }
  })
}

setInterval(main, 5000)
