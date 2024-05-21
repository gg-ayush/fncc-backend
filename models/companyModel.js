const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    org_id: {
        type: String,
        required: true,
        unique: true
    },
    orgName: {
        type: String,
        required: true
    },
    primaryEmail: {
        type: String,
        required: true
    },
    primaryContact: {
        type: String,
        required: false
    },
    keyPerson: {
        type: String,
        required: false
    },
    distributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Distributor',
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    salesCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sales',
    },
    password: {
        type: String,
        required: true
    }
})

const Company = mongoose.model("Company", companySchema)

module.exports = Company