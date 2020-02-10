const { articles } = require('../controllers/site.articles.controller.js');

module.exports = function(app) {
        app.get('/v1/articles', articles);
}