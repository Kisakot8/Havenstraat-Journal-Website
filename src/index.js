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
    var authors = "";
    for (let index = 1; index <= articleCount; index++) {
        const title = readFileSync(`${articlesDir}/${index}/title.txt`, 'utf-8');
        titles += title + '%%%';

        const author = readFileSync(`${articlesDir}/${index}/author.txt`, 'utf-8');
        authors += author + '%%%';
    }

    res.render('index', { // render the main file & transfer variables from server to client
        'titles' : titles,
        'authors': authors,
        'articleCount' : articleCount
    }); 
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
