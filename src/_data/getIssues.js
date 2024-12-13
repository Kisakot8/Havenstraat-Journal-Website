require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

async function getIssues () {
    const PROJECT_ID = process.env.SANITY_ID;
    const DATASET = process.env.SANITY_DATASET;

    const QUERY = encodeURIComponent(`
*[_type == "issue"] {
    "number": number,
    "color": issueColor.hex,
    "imageUrl": thumbnail.asset->url,
    "pdfUrl": issuePDF.asset->url,
    "date": publishDate,
    articles[]->{
        "slug": slug.current,
        title,
        author->{
        name,
        "slug": slug.current
        },
        "imageUrl": thumbnail.asset->url,
        "pdfUrl": articlePDF.asset->url,
        "tags": tags[]->name
    }
}
    `);

    const URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET}?query=${QUERY}`;

    const response = EleventyFetch(URL, {
        duration: "*",
        type: "json"
    });

    return response;
}

module.exports = getIssues;
