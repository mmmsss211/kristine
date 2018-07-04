var express = require('express')
const port = process.env.PORT || 5000

var app = express()

app.get('/', function(request,response) {
    response.send("<h1>Prep for prep</h1>")
})

app.listen(port, function() {
    console.log('App running on port ' + port)
})