const Category = require('../model/category.model')

module.exports.categoryController = {

    createCategory:(req,res) =>{
        Category.create({
            title: req.body.title
        }).then((data) =>{
            res.json(data)
        }).catch((err) =>{
            res.json(err)
        })
    },
    deleteCategory:(req,res) =>{
        Category.findByIdAndRemove(req.params.id).then((data)=>{
            res.json(data)
        })
    },
    getCategory:(req,res)=>{
        Category.find().then((data)=>{
            res.json(data)
        })
    }
}