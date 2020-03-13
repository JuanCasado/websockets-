
const WebSocket = require('ws');
const util = require('util')
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    process(JSON.parse(msg), (msg)=>{ws.send(JSON.stringify(msg))})
    .then(()=>{ws.close})
    .catch(()=>{ws.close})
  })
})

console.log('Started')

async function process (msg, send) {
  console.log(util.inspect(msg, false, null, true))
  send(msg)
}

