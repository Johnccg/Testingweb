const todoController = require("../../controllers/todoController")
const todoModel = require("../../models/todoModel")
const newTask = require("../mockups/todoMockup.json")
const httpmockup = require("node-mocks-http")

todoModel.create = jest.fn()

let req, res, next
beforeEach(() => {
    res = httpmockup.createResponse()
    req = httpmockup.createRequest()
    next = null
})

describe("TestCreate methoc exists in controller", () => {
    it("shoud have a create method", () => {
        expect(typeof todoController.todoCreate).toBe("function")
    })

    it("shoud call todoModel.create()", () => {
        req.body = newTask
        todoController.todoCreate(req,res,next)
        expect(todoModel.create).toBeCalledWith(newTask)
    })

    it("shoud retuurn 201 status code", () => {
        req.body = newTask
        todoController.todoCreate(req,res,next)
        expect(res.statusCode).toBe(201)
    })
})