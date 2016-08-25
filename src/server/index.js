const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const routes = require('./routes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())

app.get('/companies', routes.getAllCompanies)

app.get('/company', routes.getCompany)

app.post('/company', routes.createCompany)

db.connect()
  .then(() => {
    app.listen(PORT, function () {
      console.log('Listening on port', PORT)
    })
  })
  .catch(() => console.log('Could not connect to DB'))
