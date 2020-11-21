const mongoose = require('mongoose')
const User = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", User);
