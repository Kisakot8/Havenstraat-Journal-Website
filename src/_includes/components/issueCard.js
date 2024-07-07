const {html} = require('common-tags');

function issueCard(number, color, imgUrl, numberDate, pdfUrl) {
    const [yyyy, mm, dd] = numberDate.split('-');

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const ordinals = [
        "st", "nd", "rd", "th"
    ];

    const day = dd + ordinals[ Math.min(dd-1, 3) ];
    const month = months[mm-1];

    return html`
    <div class="card issue"
    id="issue-${number}"
    onclick="window.open('${pdfUrl}');">
        <div class="card-thumbnail-container">
            <img class="card-thumbnail" src=${imgUrl} alt="Issue thumbnail"></img>
        </div>
        <h2 class="card-title">Issue No. ${number}</h2>
        <h4 class="card-subheading">Published ${month} ${day} ${yyyy} </h4>
    </div>

    <style type="text/css">
        #issue-${number}:hover {
            box-shadow: 8px 8px 0 0 ${color} !important;
        }
        
        #issue-${number} {
            order: -${number}
        }
    </style>
    `
}

module.exports = issueCard;
