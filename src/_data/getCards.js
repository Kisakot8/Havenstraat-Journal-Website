require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getCards () {
    const PROJECT_ID = process.env.SANITY_ID;
    const DATASET = process.env.SANITY_DATASET;

    const QUERY = encodeURIComponent(`
*[_type == "article"] {
"slug": slug.current,
title,
author->{
  name,
  nickname
},
"imageUrl": thumbnail.asset->url,
"pdfUrl": articlePDF.asset->url,
"tags": tags[]->name
}
`
    );

    const URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET}?query=${QUERY}`;

    const response = EleventyFetch(URL, {
        duration: "1d",
        type: "json"
    });

    const articles = response;
    return articles;
}

module.exports = getCards;
