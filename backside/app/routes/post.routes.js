module.exports = app => {
    const posts = require('../controllers/post.controller.js')

    let router = require('express').Router()

    // Create new post
    router.post('/', posts.create)

    // Retrieve all post
    router.get('/', posts.findList)

    // Retrieve post with published = true
    router.get('/published', posts.findPublished)

    // Retrieve single post
    router.get('/:id', posts.findOne)

    // Update post
    router.put('/:id', posts.replace)

    // Delete post
    router.delete('/:id', posts.kill)

    // Delete all post
    router.delete('/', posts.purge)

    app.use('/api/posts', router)
}