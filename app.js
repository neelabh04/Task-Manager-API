const express = require('express');
const app = express();
const tasks = require('./routes/tasks') 
const connectDatabase = require('./Database/connect')
require('dotenv').config()

// Middlewares
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const PORT = 3000;

const startServer = async () => {
    try {
        await connectDatabase(process.env.Mongo_URI)
        app.listen(PORT, console.log(`Server is listening on ${PORT}...`))
    } catch (err) {
        console.log(err)
    }
}

startServer()