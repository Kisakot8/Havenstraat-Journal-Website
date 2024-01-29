const { readFile, readFileSync, readdir, readdirSync } = require('fs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


const articlesDir = './public/articles';
const splitter = '%%%';

readdir(articlesDir, (err, files) => {
    global.articleCount = files.length;
});


app.get('/', (req, res) => {
    var titles = "";
    var authors = "";
    var thumbnailExts = "";
    for (let i = 1; i <= articleCount; i++) {
        const title = readFileSync(`${articlesDir}/${i}/title.txt`, 'utf-8');
        titles += title + splitter;

        const author = readFileSync(`${articlesDir}/${i}/author.txt`, 'utf-8');
        authors += author + splitter;

        const files = readdirSync(`${articlesDir}/${i}`);
        for (const file of files) {
            splitFile = file.split('.');
            if (splitFile.slice(0, -1).join('.') === 'thumbnail') {
                thumbnailExts += splitFile[splitFile.length - 1] + splitter;
            }
        }
    }

    res.render('index', { // render the main file & transfer variables from server to client
        'titles' : titles,
        'authors': authors,
        'thumbnailExts' : thumbnailExts,
        'articleCount' : articleCount,
        'splitter' : splitter,
    }); 
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
