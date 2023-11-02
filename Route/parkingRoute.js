const {getParkig, postParking, putParking, deleteParking,} = require('../Controllers/parkinglot')
const route = require('express').Router()
// get route
route.get('/',getParkig)

// post route
route.post('/',postParking)

// put route/update
route.put('/:id',putParking)

// delete route
route.delete('/:id',deleteParking)

module.exports = route