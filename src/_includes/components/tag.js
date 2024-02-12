const {html} = require('common-tags');

function tag(name) {
    return html`
    <a class="navbar-links" id="${name}-link"> ${name} </a>
    `
}

module.exports = tag;
