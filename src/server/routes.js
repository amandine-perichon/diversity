const db = require('./db')

module.exports = {
  getCompany,
  getAllCompanies,
  createCompany
}

function getAllCompanies (req, res) {
  db.getAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.sendStatus(500).send(err)
    })
}

function getCompany (req, res) {
  const name = req.query.name
  db.getOne(name)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.sendStatus(500).send(err)
    })
}

function createCompany (req, res) {
  var company = req.body
  console.log(company)
  db.create(company)
    .then(() => {
      console.log('OK OK')
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500).send(err)
    })
}
