const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxLength: [20, 'ame must be less than 20 char']
    },
    email: {
        type: String,
        required: [true,'emil is required'],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)