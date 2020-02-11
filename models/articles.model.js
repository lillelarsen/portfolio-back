const db = require('../config/mysql');

exports.getArticles = async function() {
    try {
        const articleSQL = `SELECT articles.id, articles.title, articles.content, articles.created_at
        FROM articles 
        ORDER BY articles.created_at DESC`;
        return await db.query(articleSQL, {});
    } catch (error) {
        console.log(error);
        return null;
    }
};

exports.createArticle = async function(insertsObject) {
    try {
        const articleSQL = `INSERT INTO articles SET title = :title, content = :content`;
        return await db.query(articleSQL, insertsObject);
    } catch (error) {
        console.log(error);
        return null;
    }
};

exports.deleteArticle = async function(id) {
    try {
        const articleSQL = `DELETE FROM articles WHERE id = :id`;
        return await db.query(articleSQL, {id});
    } catch (error) {
        console.log(error);
        return null;
    }
};

exports.updateArticle = async function(insertsObject) {
    try {
        const articleSQL = `UPDATE articles SET title = :title, content = :content WHERE id = :id`;
        return await db.query(articleSQL, insertsObject);
    } catch (error) {
        console.log(error);
        return null;
    }
};
