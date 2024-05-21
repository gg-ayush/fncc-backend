const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
        unique: true
    },
    orgId: {
        type: String,
        required: true
    },
    productTitle: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
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
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product