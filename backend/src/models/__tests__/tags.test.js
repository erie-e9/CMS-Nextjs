import Sequelize from 'sequelize-mock'
import Tag from '../tags'

const sequelize = new Sequelize()
const DataTypes = sequelize.Sequelize
const model = Tag(sequelize, DataTypes)
const schema = model._defaults

describe('#tag', () => {
  it('should have correct model name', () => {
    expect(model.name).toBe('tag')
  })

  it('should match schema', () => {
    expect(schema).toEqual({
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4()
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  })
})
