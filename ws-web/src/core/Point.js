
import Observable from './Observable'
import { checkNumber } from './checks'

export default class Point extends Observable {

  constructor () {
    super()
    this.latitude = 0
    this.longitude = 0
  }

  setLatitude (latitude) {
    this.latitude = latitude
    this.emit(this.duplicate())
  }

  setLongitude (longitude) {
    this.longitude = longitude
    this.emit(this.duplicate())
  }

  isValid () {
    return (checkNumber (this.latitude) && checkNumber (this.longitude))
  }

  duplicate () {
    const point = new Point()
    point.latitude = this.latitude
    point.longitude = this.longitude
    return point
  }

  makePure() {
    if (this.isValid()) {
      this.latitude = Number(this.latitude)
      this.longitude = Number(this.longitude)
    }
  }

  equals(other) {
    return this.longitude === other.longitude && this.latitude === other.latitude
  }

  msg(){
    return {
      latitude: this.latitude,
      longitude: this.longitude
    }
  }

}