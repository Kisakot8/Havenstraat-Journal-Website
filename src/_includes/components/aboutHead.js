const {html} = require('common-tags');

function aboutHead(role, members, imgUrl, order) {
    let leaderBios = '';

    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        leaderBios += `\n<li>${member.name} - ${member.bio}</li>`
    }

    return html`
    <div class="about-leaders" style="order: ${order};">
        <h2>${role}</h2>
        <img src="${imgUrl}" alt="A photo of confident-looking people">
        <ul class="leaders-bios">
            ${leaderBios}
        </ul>
    </div>
    `
}

module.exports = aboutHead;
