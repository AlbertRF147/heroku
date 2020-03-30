var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(port)