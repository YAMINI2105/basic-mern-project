const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.post("/add-task", createTask);
router.get("/get-tasks", getTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
