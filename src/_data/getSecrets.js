// Gets private details from .env

require('dotenv').config();

function getSecrets () {
    const NAME = process.env.NAME;
    const INSTA_LINK = process.env.INSTA_LINK;

    return {
        "name": NAME,
        "insta_link": INSTA_LINK
    }
}

module.exports = getSecrets;
