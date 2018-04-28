const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err){
    return console.log("Unable to connect database");
  }

  console.log("Conection Succesful");

  db.collection('bike').find().toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    if(err){
      console.log("Unable to fetch data from Bike",err);
    }

  });

  //db.close();

});
