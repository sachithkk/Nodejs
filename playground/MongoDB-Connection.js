const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err){
    return console.log("Unable to connect database");
  }

  console.log("Conection Succesful");

  db.collection('bike').insertOne({
    text:"Honda Bile",
    color:"Black",
    power:"600cc"
  }, (err,result) => {
    if(err){
      return console.log("Unable to inser Bike");
    }
    console.log(JSON.stringify, undefined, 2);
  });

  db.close();

});
