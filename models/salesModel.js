const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({
    orgId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    disId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Distributor',
        required: true
    },
    orders: {
        type: Array,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    currentStatus: {
        type: String,
        required: true
    }
})

const Sales = mongoose.model("sales", userSchema)

module.exports = Sales