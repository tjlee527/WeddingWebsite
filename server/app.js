const express = require('express');
const bodyParser = require('body-parser');
const Tasks = require('../database/index.js');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.get('/tasks', (req, res) => {
  Tasks.find({}, (err, docs) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(docs);
  })
});

app.post('/tasks', (req, res) => {
  // console.log(req.body);
  let desc = req.body.tasks[0];
  let status = req.body.tasks[1];
  let newTask = new Tasks({task: desc, status: status});
  // console.log(newTask);
  newTask.save((err, doc) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
})


app.listen(port, () => console.log(`app listening on port ${port}`));