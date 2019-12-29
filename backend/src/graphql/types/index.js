import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'

const typesArray = fileLoader(path.join(__dirname, './')) // merge-graphql-schemas@1.7.4 issue. Error: Unknown type "Query"
// const typesArray = fileLoader('./src/graphql/types/*.graphql')

export default mergeTypes(typesArray, { all: true })