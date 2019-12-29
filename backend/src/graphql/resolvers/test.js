export default {
    Query: {
        sayHello: (_, args) => {
            return {
                message: `Hello ${args.name || 'world'}`
            }
        }
    }
}