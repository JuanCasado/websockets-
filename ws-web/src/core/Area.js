
import Observable from './Observable'
import Point from './Point'
import { storage } from '../Global'

import React from 'react';
import AreaView from '../ui/AreaView'

export default class Area extends Observable {

  constructor () {
    super()
    this.topLeft = new Point()
    this.bottomRight = new Point()
    this.topLeft.onChange(()=>{this.emit(this.duplicate())})
    this.bottomRight.onChange(()=>{this.emit(this.duplicate())})
  }

  isValid () {
    return (this.topLeft.isValid() && this.bottomRight.isValid() )
  }

  duplicate (){
    const area = new Area();
    area.topLeft = this.topLeft.duplicate()
    area.bottomRight = this.bottomRight.duplicate()
    area.topLeft.onChange(()=>{area.emit(area.duplicate())})
    area.bottomRight.onChange(()=>{area.emit(area.duplicate())})
    return area
  }

  view () {
    return <AreaView area={this}/>
  }

  delete () {
    storage.removeArea(this)
  }

  makePure() {
    if (this.isValid()) {
      this.topLeft.makePure()
      this.bottomRight.makePure()
    }
  }

  equals(other) {
    return this.bottomRight.equals(other.bottomRight) && this.topLeft.equals(other.topLeft)
  }

  msg(){
    return {
      topLeft: this.topLeft.msg(),
      bottomRight: this.bottomRight.msg()
    }
  }

}