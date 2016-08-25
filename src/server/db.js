const Mongo = require('mongodb')
const MongoClient = Mongo.MongoClient
const ObjectID = Mongo.ObjectID
const url = 'mongodb://eda:diversity@ds017246.mlab.com:17246/diversity'
let Company = null

module.exports = {
  getAll,
  getOne,
  create,
  connect
}

function connect () {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        console.log('db err', err)
        reject(err)
      } else {
        Company = db.collection('company')
        resolve()
      }
    })
  })
}

function getAll () {
  return new Promise((resolve, reject) => {
    Company.find({}).toArray((err, docs) => {
      if (err) {
        reject(err)
      } else {
        resolve(docs)
      }
    })
  })
}

function getOne (name) {
  return Company.findOne({"name": name})
}

function create (company) {
  return Company.insertOne(company)
}
