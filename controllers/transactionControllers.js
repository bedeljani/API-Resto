const models = require('../models')
const Transaction = models.transaction

exports.index = (req, res) => {
    Transaction.findAll({
 
    }).then(transactions=>res.send(transactions))
}

exports.show = (req, res) => {
    Transaction.findOne({id: req.params.id}).then(transaction=> res.send(transaction))
}

exports.store = (req, res) => {
    Transaction.create(req.body).then(transaction=> {
        res.send({
            message: "success",
            transaction
        })
    })
}

exports.update = (req, res) => {
    Transaction.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(transaction=> {
        res.send({
            message: "success",
            transaction
        })
    })
}

exports.delete = (req, res) => {
    Transaction.destroy({where: {id: req.params.id}}).then(transaction=> {
        res.send({
            message: "success",
            transaction
        })
    })
}