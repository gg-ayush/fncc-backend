const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const distributorSchema = new mongoose.Schema({
    dist_id: {
        type:Number,
        required: true,
        unique: true,
    },
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
    keyPerson: {
        type: String,
        required: true
    },
    // distributor: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Distributor',
    // },
    distributorInventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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

distributorSchema.plugin(AutoIncrement, { inc_field: 'dist_id' });

const Distributor = mongoose.model("Distributor", distributorSchema)

module.exports = Distributor