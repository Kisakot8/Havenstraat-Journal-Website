const articlesContainer = document.querySelector('.articles-container');


function init() {
    for (let i = 0; i < data.length; i++) {
        articleConstructor(data[i], i);
    }
    console.log('I LIVE!');
}


function articleConstructor(article, index) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-card';
    articleDiv.id = `article-${index}`;

    for (let tag of article.tags) {
        articleDiv.classList.add(tag);
    }


    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'article-thumbnail-container';

    const thumbnail = document.createElement('img');
    thumbnail.className = 'article-thumbnail';
    thumbnail.src = article.imageUrl;

    thumbnailContainer.appendChild(thumbnail);


    const title = document.createElement('h2');
    title.className = 'article-title';
    title.textContent = article.title;

    const author = document.createElement('h4');
    author.className = 'article-author';
    author.textContent = `By ${article.author.name}`;

    articleDiv.appendChild(thumbnailContainer);
    articleDiv.appendChild(title);
    articleDiv.appendChild(author);

    articlesContainer.appendChild(articleDiv);
}


function showByTag(tag) {
    all = document.getElementsByClassName('article-card');

    for (let index = 0; index < all.length; index++) {
        const article = all[index];
        if (!article.classList.contains(tag)) {
            article.style.display = 'none';
        } else { article.style.display = 'flex'; }
    }

    prevLink = document.querySelector('.current-section');
    prevLink.classList.remove('current-section');

    newLink = document.getElementById(`${tag}-link`);
    newLink.classList.add('current-section');
}
