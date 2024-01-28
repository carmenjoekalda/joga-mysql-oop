const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = [] 
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    } 

    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }  
}

module.exports = articleController

/*
// show all articles - index page
const getAllArticles = ('/', (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    }) 
});

// show article by this slug
const getArticleBySlug = ('/article/:slug', (req, res) => {
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
});

const getArticleByAuthor = ('/author/:author_id', (req, res) => {
    let authorQuery = `select name from author where id = ${req.params.author_id}`;
    let articlesQuery = `select * from article where author_id = ${req.params.author_id}`;
    let authorName;
    let authorArticles;
   // author's name
    con.query(authorQuery, (err, result) => {
        if (err) throw err;
        authorName = result[0].name;
        // author's articles
        con.query(articlesQuery, (err, result) => {
            if (err) throw err;
            authorArticles = result;
            res.render('author', {
                authorName: authorName,
                authorArticles: authorArticles
            });
        });
    });
});

// export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticleByAuthor
}
*/