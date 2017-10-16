var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url,(err,db)=>{
  if(err) throw err

  var users = db.collection('users')

  users.update({
      username: "tinatime"},{
        $set: {
          age: 40}
      }
  ,(err)=>{
      if(err) throw err
      db.close();
    })

})

//OFFICIAL SOLUTION//
// var mongo = require('mongodb').MongoClient
//
// var url = 'mongodb://localhost:27017/' + process.argv[2]
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection('users')
//   collection.update({
//     username: 'tinatime'
//   }, {
//     $set: {
//       age: 40
//     }
//   }, function(err) {
//     if (err) throw err
//     db.close()
//   })
// })
