const card = require('./src/_includes/components/card')
const test = require('./src/_includes/components/test')
const tag = require('./src/_includes/components/tag')
const issueCard = require('./src/_includes/components/issueCard')
const leaders = require('./src/_includes/components/leaders')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy('src/css/');
    eleventyConfig.addPassthroughCopy('src/js/');

    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addWatchTarget('src/js');

    // NOTE: components WILL NOT change on refresh if edited - need to restart server!
    eleventyConfig.addShortcode('card', card);
    eleventyConfig.addShortcode('test', test);
    eleventyConfig.addShortcode('tag', tag);
    eleventyConfig.addShortcode('issueCard', issueCard);
    eleventyConfig.addShortcode('leaders', leaders);

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