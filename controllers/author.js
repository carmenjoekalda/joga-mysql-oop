const Author = require('../models/author');

class AuthorController {
    constructor() {
        this.authorModel = new Author();
    }

    async getArticlesByAuthor(req, res) {
        const { author_id } = req.params

        try {
            const articles = await this.authorModel.findArticlesByAuthorId(author_id)
            res.json(articles);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = AuthorController;