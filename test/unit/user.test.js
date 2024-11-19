const userModel = require("../../models/user")

describe("User Model Test", () => {
    it("should return the user is adult", () => {
        const user = new userModel({ username: "John Doe", age: 20 })
        expect(user.isAdult()).toBeTruthy()
    })

    it("should return the user is not adult", () => {
        const user = new userModel({ username: "John Doe", age: 17 })
        expect(user.isAdult()).toBeFalsy()
    })
})