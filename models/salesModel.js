const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const salesSchema = new mongoose.Schema({
    salesId: {
        type: Number,
        required: true,
        unique:true
    },
    orgId: {
        type: String,
        required: true
    },
    disId: {
        type: String,
        required: true
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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
salesSchema.plugin(AutoIncrement, { inc_field: 'salesId' });

const Sales = mongoose.model("Sales", userSchema)

module.exports = Sales