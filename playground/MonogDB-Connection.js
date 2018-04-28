const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err){
    return console.log("Unable to connect database");
  }

  console.log("Conection Succesful");

  // deleteMany
  db.collection('todos').deleteMany({text:'yamaha Bike'}).then((result) => {
    console.log(result);
  });
});
