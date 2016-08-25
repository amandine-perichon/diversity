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
      console.log(err)
      res.sendStatus(500).send(err)
    })
}

function getCompany (req, res) {

}

function createCompany (req, res) {

}
