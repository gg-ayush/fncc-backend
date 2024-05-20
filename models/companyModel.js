const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
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
        type: Array,
        required: false
    },
    inventory: {
        type: Array,
        required: false
    },
    salesCompany: {
        type: Array,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

const Company = mongoose.model("Company", companySchema)

module.exports = Company