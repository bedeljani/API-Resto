const models = require('../models')
const Order = models.order
const User = models.user

exports.index = (req, res) => {
    Order.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(orders=>res.send(orders))
}

exports.show = (req, res) => {
    Order.findOne({id: req.params.id}).then(order=> res.send(order))
}
exports.showByTransactrionId = (req, res) => {
    Order.findAll({
        where: {
          transactionId : req.params.id
        }
      }).then(order => res.send(order))
}

exports.store = (req, res) => {
    Order.create(req.body).then(order=> {
        res.send({
            message: "success",
            order
        })
    })
}

exports.update = (req, res) => {
    Order.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(order=> {
        res.send({
            message: "success",
            order
        })
    })
}
exports.updateStatusByTransactionId = (req, res) => {
    Order.update(
        {
            status : 1
        },
        {where: {transactionId: req.params.id}}
    ).then(order=> {
        res.send({
            message: "success",
            order
        })
    })
}

exports.delete = (req, res) => {
    Order.destroy({where: {id: req.params.id}}).then(order=> {
        res.send({
            message: "success",
            order
        })
    })
}