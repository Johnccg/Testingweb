const mongoose = require("mongoose")
const { required } = require("yargs")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true}
})

userSchema.methods.isAdult = function () {
    return this.age >= 18
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel