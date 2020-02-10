const { getArticles } = require('../models/articles.model');

exports.articles = async (req, res, next) => {
    try {    
        const [rows, fields] = await getArticles();       
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}