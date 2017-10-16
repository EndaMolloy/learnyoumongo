var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db)=> {
  if(err) throw err

  var users = db.collection('users')
  var doc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  }


  users.insert(doc, (err, data)=>{
      if(err) throw err
      console.log(JSON.stringify(doc))
      db.close()
  })
})
