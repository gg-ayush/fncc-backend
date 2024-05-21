const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        unique: true
    },
    orgId: {
        type: String,
        required: true
    },
    roleTitle: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

const Role = mongoose.model("Role", roleSchema)

module.exports = Role