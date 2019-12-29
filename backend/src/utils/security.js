import crypto from 'crypto'
import { _security } from '../config'

export function encrypt(string) {
    return crypto
    .createHash('sha1')
    .update(`${_security().securityKey}${string.toString()}`)
    .digest('hex')
}