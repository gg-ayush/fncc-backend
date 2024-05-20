const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({
    orgId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    productTitle: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    productCost: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    currentStock: {
        type: Number,
        required: true
    },
    openingStock: {
        type: Number,
        required: true
    },
    closingStock: {
        type: Number,
        required: true
    }
})

const Sales = mongoose.model("sales", userSchema)

module.exports = Sales