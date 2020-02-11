const { 
    getArticles, 
    createArticle, 
    updateArticle, 
    deleteArticle 
} = require('../models/articles.model');

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
    try {       
        const article = await createArticle({
            title: req.fields.title, 
            content: req.fields.content
        });
        res.send("Blog indlæg oprettet");

    } catch (error) {
        console.log(error);
        res.send("Kan ikke oprette Blog indlæg");
    }
}

exports.editArticle = async function(req, res, next) {
    try {
        const news = await updateArticle({
            id: req.params.id, 
            title: req.fields.title, 
            content: req.fields.content
        });
        res.send("Blog indlæg opdateret");
    } catch (error) {
        console.log(error);
        res.send("Kan ikke opdatere nyhed");
    }
}

exports.deleteAnArticle = async function(req, res, next) {
    try {
        const [deleted] = await deleteArticle(req.params.id);
        res.send("Blog indlæg slettet");
    } catch (error) {
        console.log(error);
        res.send("Kan ikke slette Blog indlæg");
    }
}