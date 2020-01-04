import Sequelize from 'sequelize-mock'
import { isFunction } from '../../utils/is'
import User from '../users'

const sequelize = new Sequelize()
const DataTypes = sequelize.Sequelize
const model = User(sequelize, DataTypes)
const schema = model._defaults

describe('#user', () => {
  it('should have correct model name', () => {
    expect(model.name).toBe('user')
  })

  it('should match schema', () => {
    expect(schema).toEqual({
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4()
      },
      uusername: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'Username just accepts alphanumeric characters'
          },
          len: {
            args: [3, 100],
            msg: 'Username must has between 3 - 100 characters'
          }
        }
      },
      ufirstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ufatherlastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      umotherlastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      uavatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uemail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'User email is incorrect type of email'
          }
        }
      },
      uphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ucellphone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      upassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ubirthdate: {
        type: DataTypes.STRING, // DATETIME
        allowNull: false,
      },
      ugender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ulocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uprivilege: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
      },
      uactiveaccount: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      uadmisiondate: {
        type: DataTypes.STRING, // DATETIME
        allowNull: false,
      },
      uegressdate: {
        type: DataTypes.STRING, // DATETIME
        allowNull: true,
      },
      uemailverified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      uisenabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      uregisteredbyuser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uupdatedbyuser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      udeletedbyuser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      udatedeleted: {
        type: DataTypes.STRING, // DATETIME
        allowNull: true,
      }
    })
  })

  it('should have beforeCreate hook', () => {
    expect(isFunction(model.options.hooks.beforeCreate)).toBe(true)
  })

  it('should have associate method', () => {
    expect(isFunction(model.associate)).toBe(true)
  })
})
