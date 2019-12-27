export default (sequelize, { UUID, UUIDV4, STRING }) => {
    const Tag = sequelize.define('Tag', {
        id: {
            type: UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4()
        },
        name: {
            type: STRING,
            allowNull: false
        }
    })

    return Tag
}