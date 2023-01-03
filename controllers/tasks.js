const getAllTasks = (req, res) => {
    res.send('All items present in Tasks')
}

const createTasks = (req, res) => {
    res.json(req.body)
}

const getSpecificTask = (req, res) => {
    res.json({id:req.params.id})
}
const updateTask = (req, res) => {
    res.send('Update Task the specified task')
}
const deleteTask = (req, res) => {
    res.send('Delete a single task')
}

module.exports = {
    getAllTasks, 
    createTasks,
    getSpecificTask,
    updateTask,
    deleteTask
}