import posts from '../posts'
import { isFunction } from '../../../utils/is'

describe('#Query', () => {
  it('should have getPosts method', async () => {
    expect(isFunction(posts.Query.getPosts)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have createPost method', async () => {
    expect(isFunction(posts.Mutation.createPost)).toBe(true)
  })
})
