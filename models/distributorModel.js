const mongoose = require('mongoose')

const distributorSchema = new mongoose.Schema({
    distributorName: {
        type: String,
        required: true
    },
    distributorEmail: {
        type: String,
        required: true
    },
    distributorContact: {
        type: String,
        required: true
    },
    distributorkeyPerson: {
        type: String,
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

const Distributor = mongoose.model("distributor", distributorSchema)

module.exports = Distributor