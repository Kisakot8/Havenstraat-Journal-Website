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
    for (let i = 0; i < articleCount; i++) {
        console.log(`pass ${i}`)
        createArticleDiv(i);
    }
}


function createArticleDiv(index) {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article-card";

    var thumbnail = new Image();
    thumbnail.src = ``;
    articleDiv.style.backgroundImage = ``;

    articlesContainer.appendChild(articleDiv);
}
