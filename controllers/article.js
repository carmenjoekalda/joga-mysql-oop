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

    async createNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        };
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `Created article with id ${articleId}`,
            article: { id: articleId, ...newArticle }
        });
    }

    async updateArticle(req, res) {
        const editedArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const newArticle = await articleModel.updateOne(req.params.id, editedArticle)
        res.status(201).json({
            message: `created article with id ${newArticle}`,
            article: {id: newArticle, ...editedArticle}  
        })
    }

    async deleteArticle(req, res) {
        const deletedArticle = {
            name: req.body.name,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        } 
        const delArticle = await articleModel.deleteOne(req.params.id, deletedArticle)
        res.status(201).json({
            message: `deleted article with id ${delArticle}`,
            article: {id: delArticle, ...deletedArticle}  
        })
    }
}

module.exports = articleController