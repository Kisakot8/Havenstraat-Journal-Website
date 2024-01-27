const { readFile, readFileSync } = require("fs");
const meow = require("./testModule");
const express = require("express");

const app = express();
app.use(express.static("public"));

const txt = readFileSync("./public/articles/1/title.txt", "utf-8");


app.get("/", (request, response) => {
    readFile("./public/html/index.html", "utf-8", (err, html) => {

        if (err) {
            response.status(500).send("sorry my website broke again lmao");
        }

        response.send(html);
    });

});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

module.exports = { txt };
