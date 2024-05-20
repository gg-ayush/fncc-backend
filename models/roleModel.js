const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    orgId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
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

const Role = mongoose.model("role", roleSchema)

module.exports = Role