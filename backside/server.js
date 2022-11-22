const express = require('express')
const bodyParser = require('body-parser')
const CORS = require('cors')
// Models DB
const db = require('./app/models')

const app = express()

let whitelist = [
    'http://localhost:8081' // This is site of frontside
]
let corsConfig = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// Use CORS with corsConfig
app.use(CORS(corsConfig))

// Use parse request application/json x-www-form-urlencode
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to ExMySQL!'
    })
})

// Post Routes
require('./app/routes/post.routes.js')(app)

// Sync Database
db.sequelize.sync()

// Activate Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})