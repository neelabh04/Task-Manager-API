const express = require('express');
const app = express();
const tasks = require('./routes/tasks') 
const connectDatabase = require('./Database/connect')
require('dotenv').config()
const notFound = require('./Middleware/not-found')
const errorHandlerMiddleware = require('./Middleware/error-handler')

// Middleware
app.use(express.static('./public/'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDatabase(process.env.Mongo_URI)
        app.listen(port, console.log(`Server is listening on ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

startServer()