const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    keyPerson: {
        type: String,
        required: true
    },
    distributor: {
        type: Array,
        required: true
    },
    distributorInventory: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const Shop = mongoose.model("shop", shopSchema)

module.exports = Shop