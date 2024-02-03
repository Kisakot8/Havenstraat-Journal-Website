const { readFile, readFileSync, readdir, readdirSync } = require('fs');
const express = require('express');
const e = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index'); 
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
