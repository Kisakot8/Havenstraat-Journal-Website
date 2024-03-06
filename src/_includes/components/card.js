const {html} = require('common-tags');

function card(title, imgUrl, tags, author, pdfUrl) {
    return html`
    <div class="card article"
    onclick="window.open('${pdfUrl}');"
    data-tags="${tags.join(' ')}"
    data-author="${author.name}"
    >
        <div class="card-thumbnail-container">
            <img class="card-thumbnail" src=${imgUrl} alt="Article thumbnail"></img>
        </div>
        <h2 class="card-title">${title}</h2>
        <h4 class="card-subheading">By ${author.name}</h4>
    </div>
    `
}

module.exports = card;
