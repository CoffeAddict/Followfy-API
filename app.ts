import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()
dotenv.config()

// Import environment variables
const port = process.env.PORT || 3000
const devENV = process.env.NODE_ENV == 'development'

// Config Cross Origin Resource Sharing
app.use(cors({
    origin: process.env.APP_URL
}))

//Import routes
require('./routes/login')(app)
require('./routes/exceptions')(app)

app.listen(port, () => {
    console.log(`Followfy API Running...`)
})

module.exports = app