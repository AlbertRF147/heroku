var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(port)