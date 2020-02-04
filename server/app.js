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
  let desc = req.body.desc;
  let status = req.body.status;
  let newTask = new Tasks({task: desc, status: status});
  newTask.save((err, doc) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
});

app.put(`/tasks/item/:id`, (req,res) => {
  const taskId = req.body.id;
  const newTaskObj = {
    _id: req.body.id,
    task: req.body.task,
    status: req.body.status
  }

  Tasks.findOneAndUpdate( {_id: taskId}, req.body, (err, doc) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
});

app.delete('/tasks/item/:id', (req, res) => {
  const taskId = req.body.id;
  Tasks.deleteOne({_id: req.body.id}, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
})

app.listen(port, () => console.log(`app listening on port ${port}`));