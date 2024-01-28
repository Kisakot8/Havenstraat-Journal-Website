const articlesContainer = document.querySelector(".articles-container");

document.addEventListener('DOMContentLoaded', init);


function init() {
    for (let i = 1; i <= articleCount; i++) {
        createArticleDiv(i);
    }
}


function createArticleDiv(index) {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article-card";

    const thumbnail = document.createElement("img");
    thumbnail.className = 'article-thumbnail';
    thumbnail.src = `./articles/${index}/thumbnail.webp`;

    const title = document.createElement("h2");
    title.className = 'article-title';
    title.textContent = titles[index-1];

    articleDiv.appendChild(thumbnail);
    articleDiv.appendChild(title);

    articlesContainer.appendChild(articleDiv);
}
