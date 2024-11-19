const todoModel = require("../models/todoModel")

exports.todoCreate = async (req, res, next) => {
    todoModel.create(req.body)
    res.status(201).send()
}