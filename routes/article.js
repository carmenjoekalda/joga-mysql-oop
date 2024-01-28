const express = require('express');
const router = express.Router();
const articleControllerClass = require ('../controllers/article');
const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));

/*
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:author_id', articleController.getArticleByAuthor);
*/

module.exports = router;