const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
app.use(cors());
app.use(express.json());
const Port = 3000;
app.use('/api/tasks', router);
app.listen(Port, (req, res) => {
  console.log(`listening on port ${Port}`);
});
