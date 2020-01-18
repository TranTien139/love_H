const express = require("express")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))