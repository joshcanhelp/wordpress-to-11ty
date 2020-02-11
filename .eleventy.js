const moment = require('moment');
moment.locale('en');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setTemplateFormats([ 'md', 'css' ]);

  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('status', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('aside', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('video', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('audio', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('image', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('gallery', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('chat', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('quote', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('link', 'layouts/post.njk');

  eleventyConfig.addCollection('postsCollection', function(collection) {
    const tmpCollection = collection.getAllSorted();
    return tmpCollection.reverse().filter(function(tpl) {
      if ( tpl.data.permalink && tpl.data.layout && 'post' === tpl.data.layout ) {
        return true;
      }
    });
  });

  eleventyConfig.addCollection('bestOfCollection', function(collection) {
    const tmpCollection = collection.getAllSorted();
    return tmpCollection.reverse().filter(function(tpl) {
      if ( tpl.data.permalink && tpl.data.tags && tpl.data.tags.includes('Best Of') ) {
        return true;
      }
    });
  });


  eleventyConfig.addCollection('allTags', function(collection) {
    let allTags = [];

    collection.getAllSorted().forEach(function(el) {
      allTags = allTags.concat(el.data.tags);
    });

    let tagDict = {};
    allTags.sort().forEach(function(el) {
      if (el) {
        tagDict[el] = tagDict[el] ? tagDict[el] + 1 : 1;
      }
    });

    return tagDict;
  });

  eleventyConfig.addFilter('dateformat', function(dateIn) {
    return moment(dateIn).format('MMM DD, YYYY [at] h:mm a');
  });

  return {
    dir: {
      input: "content",
      output: "_dist"
    }
  };
};
