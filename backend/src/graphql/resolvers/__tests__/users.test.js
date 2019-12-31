import users from '../users'
import { isFunction } from '../../../utils/is'

describe('#Query', () => {
  it('should have getUsers method', async () => {
    expect(isFunction(users.Query.getUsers)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have createUser method', async () => {
    expect(isFunction(users.Mutation.createUser)).toBe(true)
  })

  it('should have loginUser method', async () => {
    expect(isFunction(users.Mutation.loginUser)).toBe(true)
  })
})
