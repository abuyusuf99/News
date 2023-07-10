const News = require("../model/News.model");
module.exports.newsController = {
  creatyNews: (req, res) => {
    News.create({
      heading: req.body.heading,
      text: req.body.text,
      category: req.body.category,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  patchNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, { text: req.body.text }).then(
      (data) => {
        res.json(data);
      }
    );
  },

  deleteNews: (req, res) => {
    News.findByIdAndRemove(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getNewsId: (req, res) => {
    News.findById(req.params.id).populate('category').then((data) => {
      res.json(data);
    });
  },
  getNews:(req,res)=>{
    News.find().then((data) =>{
      res.json(data)
    })
  },
  getNewsCategory:(req,res) => {
    News.find({category: req.params.id}).then((data)=>{
      res.json(data)
    })
  }
};
