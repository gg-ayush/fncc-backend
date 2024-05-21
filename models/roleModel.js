const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const roleSchema = new mongoose.Schema({
    userId:{
        type: Number,
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

roleSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const Role = mongoose.model("Role", roleSchema)

module.exports = Role