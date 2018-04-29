var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create model.
// var Todo = mongoose.model('Todo', {
//   text:{
//     type:String,
//     required:true,
//     trim:true
//   },
//   completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default:null
//   }
// });


// set values
// var newTodo = new Todo({
//   text: "This is dinner time"
// });


// save into database
// newTodo.save().then((doc) => {
//   console.log(JSON,stringify(doc,undefined,2));
// }, (err) => {
//   console.log("Unable to save data ",err);
// });


var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email:"sachith.example.com"
});

user.save().then((doc) => {
  console.log("User save ", doc);
}, (err) => {
  console.log("Unable to save user "+ err);
});
