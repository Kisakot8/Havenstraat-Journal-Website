const articlesContainer = document.querySelector(".articles-container");

document.addEventListener('DOMContentLoaded', function() {
    titles = titles.split('%%%');
    titles.pop();

    for (let i = 0; i < titles.length; i++) {
        console.log(titles[i]);
    }

    init();
});


function init() {
    for (let i = 1; i <= articleCount; i++) {
        // console.log(`pass ${i}`)
        createArticleDiv(i);
    }
}


function createArticleDiv(index) {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article-card";
    articleDiv.style.backgroundImage = `url("./articles/${index}/thumbnail.webp")`;

    articlesContainer.appendChild(articleDiv);
}
