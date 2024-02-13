const {html} = require('common-tags');

function tag(name) {
    return html`
    <a class="navbar-links" id="${name}-link" href="javascript:showByTag('${name}')"> ${name} </a>
    `
}

module.exports = tag;
