require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getLeaders () {
    const PROJECT_ID = process.env.SANITY_ID;
    const DATASET = process.env.SANITY_DATASET;

    const QUERY = encodeURIComponent(`
*[_type == "leaders"] {
    role,
    members[]->{
        name,
        "slug": slug.current,
        bio,
        "isAuthor": author
    },
    order,
    aboutDisplay,
    "imgUrl": photo.asset->url
}

    `);

    const URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET}?query=${QUERY}`;

    const response = EleventyFetch(URL, {
        duration: "2d",
        type: "json"
    });

    const leaders = response;
    return leaders;
}

module.exports = getLeaders;
