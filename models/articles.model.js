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
