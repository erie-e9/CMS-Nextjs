import { encrypt } from '../utils/security'

export default (sequelize, { UUID, UUIDV4, STRING, BOOLEAN }) => {
    const User = sequelize.define('user', {
        _id: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        uusername: {
            type: STRING,
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
            type: STRING,
            allowNull: false,
        },
        ufatherlastname: {
            type: STRING,
            allowNull: false,
        },
        umotherlastname: {
            type: STRING,
            allowNull: true,
        },
        uavatar: {
            type: STRING,
            allowNull: false,
        },
        uemail: {
            type: STRING,
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
            type: STRING,
            allowNull: true,
        },
        ucellphone: {
            type: STRING,
            allowNull: false,
        },
        upassword: {
            type: STRING,
            allowNull: false,
        },
        ubirthdate: {
            type: STRING, //DATETIME
            allowNull: false,
        },
        ugender: {
            type: STRING,
            allowNull: false,
        },
        ulocation: {
            type: STRING,
            allowNull: false,
        },
        uprivilege: {
            type: STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        uactiveaccount: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        uadmisiondate: {
            type: STRING, //DATETIME
            allowNull: false,
        },
        uegressdate: {
            type: STRING, //DATETIME
            allowNull: true,
        },
        uemailverified: {
            type: BOOLEAN,
            allowNull: false,
        },
        uisenabled: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        uregisteredbyuser: {
            type: STRING,
            allowNull: false,
        },
        uupdatedbyuser: {
            type: STRING,
            allowNull: true,
        },
        udeletedbyuser: {
            type: STRING,
            allowNull: true,
        },
        udatedeleted: {
            type: STRING, //DATETIME
            allowNull: true,
        }
    }, {
        hooks: {
            beforeCreate: user => {
                user.upassword = encrypt(user.upassword)
            }
        }
    })

    User.associate = models => {
        User.hasMany(models.Post, {
            foreignKey: {
                name: 'user_id',
                field: 'user_id'
            },
            as: 'posts'
        })
    }

    return User
}