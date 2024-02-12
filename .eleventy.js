const card = require('./src/_includes/components/card')
const test = require('./src/_includes/components/test')
const tag = require('./src/_includes/components/tag')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy('src/css/');

    eleventyConfig.addWatchTarget('src/css');

    // NOTE: components WILL NOT change on refresh if edited - need to restart server!
    eleventyConfig.addShortcode('card', card);
    eleventyConfig.addShortcode('test', test);
    eleventyConfig.addShortcode('tag', tag);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}