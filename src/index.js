const { readFile, readFileSync, readdir, readdirSync } = require('fs');
const express = require('express');
const e = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const splitter = '%%%';
const articlesDir = './public/articles';

readdir(articlesDir, (err, files) => {
    global.articleCount = files.length;
});



app.get('/', (req, res) => {
    var thumbnailExts = "";
    var allData = {};
    for (let i = 1; i <= articleCount; i++) {

        // Get thumbnail file extension
        const files = readdirSync(`${articlesDir}/${i}`);
        for (const file of files) {
            splitFile = file.split('.');
            if (splitFile.slice(0, -1).join('.') === 'thumbnail') { thumbnailExts += splitFile[splitFile.length - 1] + splitter; }
        }

        // Get JSON
        data = JSON.parse(readFileSync(`${articlesDir}/${i}/details.json`, 'utf-8'));
        allData[`${i}`] = data;
    }

    res.render('index', { // render the main file & transfer variables from server to client
        'splitter' : splitter,
        'articleCount' : articleCount,
        'thumbnailExts' : thumbnailExts,
        'data' : allData,
    }); 
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
