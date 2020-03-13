
import { EventEmitter } from 'events'

export default class Observable {
  
  constructor () {
    this.eventName = 'change'
    this.emitter = new EventEmitter()
  }

  emit (msg) {
    this.emitter.emit(this.eventName, msg)
  }

  onChange (callback) {
    this.emitter.on(this.eventName, callback)
  }

  offChange (callback) {
    this.emitter.off(this.eventName, callback)
  }

}