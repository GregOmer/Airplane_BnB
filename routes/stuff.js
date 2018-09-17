const express = require('express')
const router = express.Router()
const ctrl = require('../controller/ajax')


console.log(ctrl.getOneAirportZip);

router.get('/airports/ap_zip', ctrl.getOneAirportZip)
// router.get('/users/:id/planes', ctrl.getAllPlanes)
// router.get('/users/:id/planes/:id', ctrl.getOnePlaneForUser)
// router.get('/users', ctrl.getUsers)
// router.get('/users/:id', ctrl.getOneUser)



router.post('/airports/ap_zip', ctrl.getOneAirportZip)


module.exports = router;
