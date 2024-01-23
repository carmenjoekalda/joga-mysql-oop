const con = require('../utils/db');

// show all articles - index page
const getAllArtticles = (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    }) 
};

// show article by this slug
const getArticleBySlug = (req, res) => {
    let query = `
        SELECT article.*, author.name as author
        FROM article
        LEFT JOIN author ON article.author_id = author.id
        WHERE article.slug="${req.params.slug}"`;
    let article;
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result[0];
        res.render('article', {
            article: article
        });
    });
};

// export controller functions
module.exports = {
    getAllArtticles,
    getArticleBySlug
}  