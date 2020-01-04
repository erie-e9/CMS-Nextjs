import Sequelize from 'sequelize-mock'
import { isFunction } from '../../utils/is'
import Post from '../posts'

const sequelize = new Sequelize()
const DataTypes = sequelize.Sequelize
const model = Post(sequelize, DataTypes)
const schema = model._defaults

describe('#post', () => {
  it('should have correct model name', () => {
    expect(model.name).toBe('post')
  })

  it('should match schema', () => {
    expect(schema).toEqual({
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4()
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      readingTime: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '3 min'
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'es'
      },
      image: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    })
  })

  it('should have associate method', () => {
    expect(isFunction(model.associate)).toBe(true)
  })
})
