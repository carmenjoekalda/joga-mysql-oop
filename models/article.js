const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findAll() {
        const articles = await super.findAll()
        return articles
    } 

    async findOne(slug) {
        const article = await super.findOne('slug', slug)
        return article
    }
    
    async create(article) {
        const createdArticleId = await super.create(article)
        return createdArticleId
    }

    async updateOne(id, date) {
        const editedArticle = await super.update(id, date)
        return editedArticle
    } 

    async deleteOne(id) {
        const deletedArticle = await super.delete(id)
        return deletedArticle
    }
}

module.exports = ArticleModel