import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'
import { encrypt, setBase64 } from './security'
import { _security } from '../config'
import { isPasswordMatch } from './is'

export const createToken = async user => {
  const { _id, uusername, upassword, uemail, uprivilege, uactiveaccount } = user
  const token = setBase64(`${encrypt(_security().secretKey)}${upassword}`)

  const userData = {
    _id,
    uusername,
    uemail,
    uprivilege,
    uactiveaccount,
    token
  }

  const buildToken = jwt.sign(
    { data: setBase64(userData) },
    _security().secretKey,
    { expiresIn: _security().expiresIn }
  )

  return Promise.all([buildToken])
}

export const doLogin = async (uemail, upassword, models) => {
  const user = await models.User.findOne({
    where: { uemail },
    raw: true
  })

  if (!user) {
    throw new AuthenticationError('Invalid Login')
  }

  const passwordMatch = isPasswordMatch(encrypt(upassword), user.upassword)

  if (!passwordMatch) {
    throw new AuthenticationError('Invalid Login, please try again')
  }

  if (!user.uactiveaccount) {
    throw new AuthenticationError('Your account is not activated yet')
  }

  const [token] = await createToken(user)

  return {
    token
  }
}
