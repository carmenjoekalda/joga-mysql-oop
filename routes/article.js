const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');
const AuthorController = require('../controllers/author');

const articleController = new ArticleController();
const authorController = new AuthorController();

router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res));
router.get('/author/:author_id', (req, res) => authorController.getArticlesByAuthor(req, res));

module.exports = router;