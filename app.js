const express = require('express');
const app = express()
const tasks = require('./routes/tasks');

// middleware
app.use(express.json())

//routes 
app.get('/hello', (req, res) => {
    res.send('Task Manager APP')
})

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/task') - get all the tasks
// app.post('/api/v1/task') - create a new task
// app.get('/api/v1/task/:id') - get  single task
// app.patch('/api/v1/task/:id') - update task
// app.delete('/api/v1/task/:id') - delete task

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}`))
