var mongo = require('mongodb').MongoClient
var num = process.argv[2]

  mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      // db gives access to the database

      var parrots = db.collection('parrots')

      parrots.find({
      age: {
        $gt : +num
      }
    }).toArray(function(err, documents) {
      if(err) throw err;

      console.log(documents)
      db.close()
    })

    })
