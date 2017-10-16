var mongo = require('mongodb').MongoClient
var num = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,db)=>{

  var parrots = db.collection('parrots')

  parrots.find({
      age: {
        $gt : +num
      }
    },{
    name:1,
    age:1,
    _id:0
    }).toArray((err,docs)=>{
      if(err) throw err

      console.log(docs);

      db.close()
    })

  })
