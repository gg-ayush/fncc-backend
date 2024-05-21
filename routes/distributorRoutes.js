const router = require('express').Router()
const distributorController = require('../controllers/distributorController.js')

// Make a create user API
router.post('/create-distributor', 
    distributorController.createDistributor
)

router.post('/login', 
    distributorController.login
)

module.exports = router