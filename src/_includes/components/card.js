const {html} = require('common-tags');

function card(title, imgUrl, tags, author) {
    return html`
    <div class="article-card ${tags.join(' ')}">
    </div>
    `
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-card';

    for (let tag of tags) {
        articleDiv.classList.add(tag);
    }


    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'article-thumbnail-container';

    const thumbnail = document.createElement('img');
    thumbnail.className = 'article-thumbnail';
    thumbnail.src = imgUrl;

    thumbnailContainer.appendChild(thumbnail);


    const titleElement = document.createElement('h2');
    titleElement.className = 'article-title';
    titleElement.textContent = title;

    const authorElement = document.createElement('h4');
    authorElement.className = 'article-author';
    authorElement.textContent = `By ${author.name}`;

    articleDiv.appendChild(thumbnailContainer);
    articleDiv.appendChild(titleElement);
    articleDiv.appendChild(authorElement);

    articlesContainer.appendChild(articleDiv);
}

module.exports = card;
