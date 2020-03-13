
import Antenna from './core/Antenna'
import Area from './core/Area'
import Storage from './core/Storage'
import Websocket from './network/Websocket'
import Response from './network/Response'

export const antenna = new Antenna()
export const area = new Area()
export const storage = new Storage()
export const ws = new Websocket()
export const response = new Response()