export default (sequelize, { UUID, UUIDV4, STRING, BOOLEAN, TEXT }) => {
    const Post = sequelize.define('post', {
        _id: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        title: {
            type: STRING,
            allowNull: false
        },
        slug: {
            type: STRING,
            allowNull: false,
            unique: true
        },
        readingTime: {
            type: STRING,
            allowNull: false,
            defaultValue: '3 min'
        },
        content: {
            type: TEXT,
            allowNull: false
        },
        language: {
            type: STRING,
            allowNull: false,
            defaultValue: 'es'
        },
        image: {
            type: STRING
        },
        published: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    Post.associate = models => {
        Post.hasMany(models.Tag, {
            foreignKey: {
                name: 'post_id',
                field: 'post_id'
            },
            as: 'tags',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Post
}