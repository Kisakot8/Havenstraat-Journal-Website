const {html} = require('common-tags');

function leaders(role, members, order) {
    let memberSections = '';

    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        
        memberSections += `\n<p> ${member.name} </p>`
    }

    return html`
    <div class="leader-section" style="order: ${order};">
        <h2> ${role} </h2>
        ${memberSections}
    </div>
    `
}

module.exports = leaders;
