require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getAuthors () {
    const PROJECT_ID = process.env.SANITY_ID;
    const DATASET = process.env.SANITY_DATASET;

    const QUERY = encodeURIComponent(`
*[_type == "author"] {
    name,
    "slug": slug.current,
    bio,
    "isAuthor": author
}
`
    );

    const URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET}?query=${QUERY}`;

    const response = EleventyFetch(URL, {
        duration: "1d",
        type: "json"
    });

    const authors = response;
    return authors;
}

module.exports = getAuthors;
