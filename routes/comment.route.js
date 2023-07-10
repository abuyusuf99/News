const {Router} = require('express')
const {commentController} = require('../controllers/comment.controller')
const router = Router()

router.post('/comment', commentController.createComment)
router.delete('/comment/:id',commentController.deleteComment)
router.get('/comment/:id', commentController.getComment)
module.exports = router