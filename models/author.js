const BaseSQLModel = require('./base.js');

class Author extends BaseSQLModel {
    constructor() {
        super('author')
    }

    async findArticlesByAuthorId(authorId) {
        const query = `
            SELECT a.* FROM article a
            JOIN author au ON a.author_id = au.id
            WHERE au.id = ?
        `;
        return this.executeQuery(query, [authorId])
    }
}

module.exports = Author