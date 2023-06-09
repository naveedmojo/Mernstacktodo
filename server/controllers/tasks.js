const Task = require('../db/model');

exports.getAllTasks = async (req, res) => {
  try {
    const response = await Task.find();
    res.status(200).json(response);
  } catch (err) {
    console.error('Error in retreiving tasks', err);
    res.status(500).json({ error: 'Failed to retrieve the tasks' });
  }
};
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const response = await task.save();
    res.status(200).json(response);
  } catch (err) {
    console.error('Error in retreiving tasks', err);
    res.status(500).json({ error: 'Failed to create task' });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const newtask = req.body;
    const doc = await Task.findByIdAndUpdate(req.params.id, newtask);
    res.status(200).json(doc);
  } catch (err) {
    console.error('Error in retreiving tasks', err);
    res.status(404).json({ error: 'task dosnt exist' });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const response = await Task.deleteOne({ _id: req.params.id });
    res.status(204).json('succesfully deleted');
  } catch {
    res.status(404);
    res.send({ error: 'task dosent exist' });
  }
};
