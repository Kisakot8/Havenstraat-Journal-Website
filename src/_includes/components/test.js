const {html} = require('common-tags');

function test(title) {
    return html`
    <div class="test-container">
        <h2 class="test-title">${title}</h2>
    </div>
    `;
}

module.exports = test;