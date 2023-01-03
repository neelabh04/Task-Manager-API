const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getSpecificTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getSpecificTask).patch(updateTask).delete(deleteTask);

module.exports = router;
