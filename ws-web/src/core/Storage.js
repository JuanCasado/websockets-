
import Observable from './Observable'

class StorageElement extends Observable {

  constructor () {
    super()
    this.elements = []
  }

  contains (element) {
    for (let i = 0; i < this.elements.length; ++i){
      if (element.equals(this.elements[i])){
        return true
      }
    }
    return false
  }

  add (element) {
    if (element && element.isValid && element.duplicate && element.isValid() && !this.contains(element)) {
      element.makePure()
      this.elements.push(element.duplicate())
      this.emit(this.duplicate())
    }
  }

  remove (element) {
    const filteredElements = this.elements.filter((e)=>{
      return !element.equals(e)
    })
    if (filteredElements.length !== this.elements.length) {
      this.elements = filteredElements
      this.emit(this.duplicate())
    }
  }

  duplicate () {
    const storage = new StorageElement()
    storage.elements = this.elements
    return storage
  }

  msg () {
    return this.elements.map((e)=>{return e.msg()})
  }

}

export default class Storage extends Observable {
  
  constructor () {
    super()
    this.antennas = new StorageElement()
    this.areas = new StorageElement()
    this.antennas.onChange(()=>{this.emit(this.duplicate())})
    this.areas.onChange(()=>{this.emit(this.duplicate())})
  }

  addAntenna (antenna) {
    this.antennas.add(antenna)
  }

  addArea (area) {
    this.areas.add(area)
  }

  removeAntenna (antenna) {
    this.antennas.remove(antenna)
  }

  removeArea (area) {
    this.areas.remove(area)
  }

  duplicate() {
    const storage = new Storage()
    storage.antennas = this.antennas
    storage.antennas = this.antennas
    return storage
  }

  msg () {
    return {
      antennas: this.antennas.msg(),
      areas: this.areas.msg()
    }
  }

}
