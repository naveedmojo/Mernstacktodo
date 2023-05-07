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
router.param('id', getTaskById);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id' / deleteTask);

module.exports = router;
