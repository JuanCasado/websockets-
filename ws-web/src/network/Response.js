
import Observable from '../core/Observable'

export default class Response extends Observable {

  constructor () {
    super()
    this.data = null
  }

  setResponse (response) {
    this.data = response
    this.emit(this.duplicate())
  }

  duplicate () {
    const response = new Response()
    response.data = this.data
    return response
  }

}