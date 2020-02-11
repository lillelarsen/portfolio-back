const { articles, createAnArticle, editArticle } = require('../controllers/site.articles.controller.js');

module.exports = function(app) {
        app.get('/v1/articles', articles);
        app.post('/v1/create-article', createAnArticle);
        app.post('/v1/edit-article/:id', editArticle);
}