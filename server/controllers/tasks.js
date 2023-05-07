const Task = require('../db/model');
exports.getTaskById = (req, res, next, id) => {
  Task.findById(id).exec((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: '404 task not found',
      });
    }
    // store that todo in req.todo so that other functions can use it
    req.task = task;
    // Because this is a middleware we have to call the next()
    // which will pass the control to the next function in the middleware stack
    next();
  });
};
exports.getAllTasks = (req, res) => {};
