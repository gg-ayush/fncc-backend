const router = require('express').Router()
const companyController = require('../controllers/companyController.js')

// Make a create company API
router.post('/create-company', 
    companyController.createCompany
)

router.post('/login', 
    companyController.login
)

module.exports = router