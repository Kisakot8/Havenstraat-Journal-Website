// Gets private details from .env

require('dotenv').config();

function getSecrets () {
    const NAME = process.env.NAME;
    const INSTA_LINK = process.env.INSTA_LINK;
    const MISSION_TEXT = process.env.MISSION_TEXT;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    return {
        "name": NAME,
        "insta_link": INSTA_LINK,
        "mission_text": MISSION_TEXT,
        "contact_email": CONTACT_EMAIL,
    }
}

module.exports = getSecrets;
