const {html} = require('common-tags');

function card(title, imgUrl, tags, author, slug) {
    return html`
    <div class="article-card"
    onclick="window.open('/articles/${slug}/');"
    data-tags="${tags.join(' ')}"
    data-author="${author.name}"
    >
        <div class="article-thumbnail-container">
            <img class="article-thumbnail" src=${imgUrl} alt="Article thumbnail"></img>
        </div>
        <h2 class="article-title">${title}</h2>
        <h4 class="article-author">By ${author.name}</h4>
    </div>
    `
}

module.exports = card;
