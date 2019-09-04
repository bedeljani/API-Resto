const models = require('../models')
const Category = models.category

exports.index = (req, res) => {
    Category.findAll({
        
    }).then(categories=>res.send(categories))
}

exports.store = (req, res) => {
    Category.create(req.body).then(data => {
      res.send({
        message: "success",
        data
      })
    })
  }