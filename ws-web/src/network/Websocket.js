
import Observable from '../core/Observable'
import { response as Storage } from '../Global'

export default class Websocket extends Observable {

  constructor() {
    super()
    this.port = 8080
    this.url = 'localhost'
  }

  setPort (port) {
    this.port = port
    this.emit(this.duplicate())
  }

  setUrl (url) {
    this.url = url
    this.emit(this.duplicate())
  }

  duplicate () {
    const ws = new Websocket()
    ws.port = this.port
    ws.url = this.url
    return ws
  }

  send (msg) {
    const ws = new WebSocket('ws://'+this.url+':'+this.port)
    ws.onopen = ()=>{
      ws.send(JSON.stringify(msg))
    }
    ws.onmessage = (msg)=>{Storage.setResponse(JSON.parse(msg.data))}
  }

}