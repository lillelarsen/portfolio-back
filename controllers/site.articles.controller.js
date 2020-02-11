const { getArticles, createArticle } = require('../models/articles.model');

exports.articles = async (req, res, next) => {
    try {    
        const [rows, fields] = await getArticles();      
        res.json(rows)
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.createAnArticle = async function(req, res, next) {
    console.log(req.fields);
    try {       
        const article = await createArticle({
            title: req.fields.title, 
            content: req.fields.content
        });
        res.end();

    } catch (error) {
        console.log(error);
        res.send("Kan ikke oprette Blog indlæg");
    }
}