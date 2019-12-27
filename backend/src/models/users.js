export default (sequelize, { UUID, UUIDV4, STRING, BOOLEAN }) => {
    const User = sequelize.define('User', {
        id: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        username: {
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
        // ufirstname: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ufatherlastname: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // umotherlastname: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uavatar: {
        //     type: STRING,
        //     allowNull: false,
        // },
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
        // uphone: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ucellphone: {
        //     type: STRING,
        //     allowNull: false,
        // },
        upassword: {
            type: STRING,
            allowNull: false,
        },
        // ubirthdate: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ugender: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // usexualorientation: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ueyescolor: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uskincomplexion: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ulocation: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ucurp: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // urfc: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // upassport: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uvisa: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // ubirthcertificate: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uposibilitytravel: {
        //     type: STRING,
        //     allowNull: false,
        // },
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
        // uadmisiondate: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uegressdate: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uemailverified: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uisenabled: {
        //     type: BOOLEAN,
        //     allowNull: false,
        //     defaultValue: false
        // },
        // uregisteredbyuser: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // uupdatedbyuser: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // udeletedbyuser: {
        //     type: STRING,
        //     allowNull: false,
        // },
        // udatedeleted: {
        //     type: STRING,
        //     allowNull: false,
        // },
        
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