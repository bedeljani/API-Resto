const models = require('../models')
const Menu = models.menu

exports.index = (req, res) => {
    Menu.findAll({
        
    }).then(menus=>res.send(menus))
}

exports.store = (req, res) => {
    Menu.create(req.body).then(data => {
      res.send({
        message: "success",
        data
      })
    })
  }