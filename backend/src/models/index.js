import Sequelize from 'sequelize'
import { _db } from '../config'

// Database connection
const { database, username, password, dialect } = _db()
const sequelize = new Sequelize(database, username, password, {
  dialect,
  define: {
    undescored: true
  }
})

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Connected successfuly to database`)
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(`Error trying connecting to databse: ${err}`)
  })

// Import models
const models = {
  Post: sequelize.import('./posts'),
  Tag: sequelize.import('./tags'),
  User: sequelize.import('./users'),
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models) // parse all models to enable
  }
})

models.sequelize = sequelize

export default models
