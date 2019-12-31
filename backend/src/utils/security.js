import crypto from 'crypto'
import { _security } from '../config'
import { isString, isObject, isJson } from './is'

export function encrypt(string) {
    return crypto
    .createHash('sha1')
    .update(`${_security().secretKey}${string.toString()}`)
    .digest('hex')
}

export function getBase64(value) {
  let buffer = false

  if (isString(value)) {
    buffer = Buffer.from(value, 'base64').toString('ascii')
  }

  if (isJson(buffer)) {
    buffer = JSON.parse(Buffer.from(value, 'base64').toString('ascii'))
  }

  return buffer
}
  
export function setBase64(value) {
  if (isObject(value)) {
    return Buffer.from(JSON.stringify(value)).toString('base64')
  } else if (isString(value)) {
    return Buffer.from(value).toString('base64')
  }

  return false
}