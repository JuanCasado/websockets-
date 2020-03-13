
import Observable from './Observable'
import Point from './Point'

import { checkNumber } from './checks'
import { storage } from '../Global'

import React from 'react';
import AntennaView from '../ui/AntennaView'

export default class Antenna extends Observable {

  constructor () {
    super()
    this.location = new Point()
    this.location.onChange(()=>{this.emit(this.duplicate())})

    this.height = 0
    this.frequency = 0
  }

  setFrequency (frequency) {
    this.frequency = frequency
    this.emit(this.duplicate())
  }

  setHeight (height) {
    this.height = height
    this.emit(this.duplicate())
  }

  isValid () {
    return (checkNumber (this.frequency) && checkNumber (this.height) && this.location.isValid())
  }

  duplicate () {
    const antenna = new Antenna()
    antenna.frequency = this.frequency
    antenna.height = this.height
    antenna.location = this.location.duplicate()
    antenna.location.onChange(()=>{antenna.emit(antenna.duplicate())})
    return antenna
  }

  view () {
    return <AntennaView antenna={this}/>
  }

  delete () {
    storage.removeAntenna(this)
  }

  makePure() {
    if (this.isValid()) {
      this.height = Number(this.height)
      this.frequency = Number(this.frequency)
      this.location.makePure()
    }
  }

  equals (other) {
    return this.location.equals(other.location) && this.frequency === other.frequency && this.height === other.height
  }

  msg() {
    return {
      frequency: this.frequency,
      height: this.height,
      location: this.location.msg()
    }
  }

}