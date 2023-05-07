const mongoose = require('mongoose');
const taskschema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Task = mongoose.model('task', taskschema);
module.exports = Task;
