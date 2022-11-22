module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('libraries', {
        title:{
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        publisher: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    return Post
}