const {html} = require('common-tags');

function aboutHead(role, members, imgUrl, order) {
    let leaderBios = '';

    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        leaderBios += `\n<li><span class="leader-name">${member.name}</span> - ${member.bio}</li>`
    }

    return html`
    <div class="about-leaders" style="order: ${order};">
        <div class="leaders-info">
            <div class="leaders-visual">
                <div class="leaders-img-container">
                    <img src="${imgUrl}" alt="A photo of confident-looking people">
                </div>
                <h2>${role}</h2>
            </div>
            <ol class="leaders-bios">
                ${leaderBios}
            </ol>
        </div>
    </div>
    `
}

module.exports = aboutHead;
