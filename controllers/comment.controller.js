const Comment = require('../model/comment.model')
module.exports.commentController = {
    createComment:(req,res)=>{
        Comment.create({
            name: req.body.name,
            text: req.body.text,
            new: req.body.new
        }).then((data)=>{
            res.json(data)
        })
    },
    deleteComment:(req,res)=>{
        Comment.findByIdAndRemove(req.params.id).then((data)=>{
            res.json(data)
        })
    },
    getComment:(req,res)=>{
        Comment.find({new: req.params.id}).then((data)=>{
            res.json(data)
        })
    }
}