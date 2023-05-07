const express = require('express');
const router = express.Router();
const {
  createTask,
  getTaskById,
  getTask,
  deleteTask,
  getAllTasks,
  updateTask,
} = require('../controllers/tasks');
router.get('/', getAllTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
