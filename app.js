const express = require('express')
const app = express()

app.get('/gadgets', (request, response) => {
  respose.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
