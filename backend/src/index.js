import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import models from './models'
// Type definition & resolvers
import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

models.sequelize.sync({ alter: true, force: !true }).then(() => {
  // eslint-disable-next-line no-console
  apolloServer.listen(5000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))
})
