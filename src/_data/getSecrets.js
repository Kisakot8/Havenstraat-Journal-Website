// Gets private details from .env

require('dotenv').config();

function getSecrets () {
    const NAME = process.env.NAME;
    const INSTA_LINK = process.env.INSTA_LINK;
    const MISSION_TEXT = process.env.MISSION_TEXT;
    const ADOBE_API = process.env.ADOBE_API;

    return {
        "name": NAME,
        "insta_link": INSTA_LINK,
        "mission_text": MISSION_TEXT,
        "adobe_api": ADOBE_API
    }
}

module.exports = getSecrets;
