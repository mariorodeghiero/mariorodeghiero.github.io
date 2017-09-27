var Feed = require('rss-to-json');

Feed.load('https://medium.com/feed/@cotts', function (err, rss) {
    console.log(rss);

});