const db = require('../models')
const Post = db.posts
const Op = db.Sequelize.Op

// Create
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: 'Content cannot be empty!'
        })
        return
    }

    // Create Post
    const post = {
        title : req.body.title,
        description : req.body.description,
        publisher: req.body.publisher,
        published : req.body.published ? req.body.published : false
    }

    Post.create(post)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating post.'
            })
        })
}

// Retrieve all
exports.findList = (req, res) => {
    const title = req.query.title
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null

    Post.findAll({ where: condition })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while find posts'
            })
        })
}

// Find single post
exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findByPk(id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: "Error retrieving post with id= " + id
            })
        })
}

// Update post by ID
exports.replace = (req, res) => {
    const id = req.params.id

    Post.update(req.body, {
        where: { id: id }
    }).then((result) =>{
        if(result ==  1) {
            res.send({
                message: 'Post was updated successfully!'
            })
        } else {
            res.send({
                message: `Post with ${id} not updated`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: 'Error updating post with id= ' + id
        })
    })
}

// Delete
exports.kill = (req, res) => {
    const id = req.params.id

    Post.destroy({
        where: { id:id }
    }).then((result) => {
        if (result == 1) {
        res.send({
            message: 'Post was deleted successfully.'
        })
        } else {
            res.send({
                message: `Cannot delete post with id ${id}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: 'Error deleting post with id= ' + id
        })
    })
}

// Delete all
exports.purge = (req, res) => {
    Post.destroy({
        where: {},
        truncate: false // If true, the id restarted to 1 when create post
    }).then((result) => {
        res.send({
            message: `${result} Posts were deleted successfully`
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occured while purging posts'
        })
    })
}

// Find by published
exports.findPublished = (req, res) => {
    Post.findAll({
        where: { published: true }
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occured while retrieving published post'
        })
    })
}