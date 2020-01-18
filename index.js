var express = require("express")
var app = express()
var port = 3000

var server = require('http').createServer(app);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

server.listen(port);
console.log(`Example app listening on port ${port}!`)