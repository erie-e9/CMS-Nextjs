import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import models from './models'

// Type definition & resolvers
import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

// const typeDefs = `
//     type Hello {
//         message: String!
//     }

//     type Query {
//         sayHello(name: String!): Hello
//     }
// `;

// const resolvers = {
//     Query: {
//         sayHello: (_, args) => {
//             return {
//                 message: `Hello ${args.name || 'world'}`
//             }
//         }
//     }
// }

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

models.sequelize.sync({ alter: true, force: false }).then(() => {
    apolloServer.listen(5000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))
})