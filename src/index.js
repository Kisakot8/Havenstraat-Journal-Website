const { readFile, readFileSync, readdir } = require('fs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


const articlesDir = './public/articles';

readdir(articlesDir, (err, files) => {
    global.articleCount = files.length;
});


app.get('/', (req, res) => {
    var titles = "";
    for (let index = 1; index <= articleCount; index++) {
        const title = readFileSync(`${articlesDir}/${index}/title.txt`, 'utf-8');
        titles += title + '%%%';
    }

    var data = {
        'titles' : titles,
        'articleCount' : articleCount
    };

    res.render('index', { 'data' : jsonUtils.encodeJSON(data) }); // render the main file
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
