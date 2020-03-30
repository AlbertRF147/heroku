var app = require('express')

app.get('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(3000)