// Gets private details from .env

require('dotenv').config();

function getSecrets () {
    const NAME = process.env.NAME;
    const DESIGNER = process.env.DESIGNER;
    const DESIGNER_LINK = process.env.DESIGNER_LINK;
    const INSTA_LINK = process.env.INSTA_LINK;

    return {
        "name": NAME,
        "designer": DESIGNER,
        "designer_link": DESIGNER_LINK,
        "insta_link": INSTA_LINK
    }
}

module.exports = getSecrets;
