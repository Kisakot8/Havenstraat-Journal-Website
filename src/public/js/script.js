import txt from "../index.js";
console.log(txt);

const articlesContainer = document.querySelector(".articles-container");

const counter = 1; // CHANGE LATER - NUMBER OF ARTICLES!

window.onload = init();

function init() {
    for (let i = 0; i < counter; i++) {
        console.log(`pass ${i}`)
        createArticleDiv(i);
    }
}


function createArticleDiv(index) {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article-card";

    let thumbnail = new Image();
    thumbnail.src = ``;
    articleDiv.style.backgroundImage = ``;

    articlesContainer.appendChild(articleDiv);
}
