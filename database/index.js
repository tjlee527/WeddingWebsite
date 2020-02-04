const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weddingWebsite', {useNewUrlParser: true});

const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!');
});


const taskSchema = new Schema({
  task: String,
  status: String
});

const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;