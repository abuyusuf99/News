const {Router} = require('express')
const {newsController} = require('../controllers/news.controller')
const router = Router()

router.post('/news', newsController.creatyNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id',newsController.patchNews)
router.get('/news/:id', newsController.getNewsId)
router.get('/news',newsController.getNews)
router.get('/new/:id',newsController.getNewsCategory)
module.exports = router