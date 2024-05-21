const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    shopId: {
        type: String,
        required: true,
        unique:true
    },
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Distributor'
    },
    distributorInventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
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

const Shop = mongoose.model("Shop", shopSchema)

module.exports = Shop