const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const Port = 8000;
app.use('/api/tasks', router);
app.listen(Port, (req, res) => {
  console.log(`listening on port ${Port}`);
});
mongoose
  .connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to the database');
  })
  .catch((err) => {
    console.error('Error in connecting to mongo db', err);
  });
