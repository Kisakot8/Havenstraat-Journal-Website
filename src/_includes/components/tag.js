const {html} = require('common-tags');

function tag(name) {
    return html`
    <a class="navbar-links" id="${name}-link" href="/tags/${name}"> ${name} </a>
    `
}

module.exports = tag;
