const { getParkingslot, postParkingslot, putParkingslot, deleteParkingslot } = require('../Controllers/parkingslotController')
const route = require('express').Router()
// get route
route.get('/',getParkingslot)

// post route
route.post('/',postParkingslot)

// put route/update
route.put('/:id',putParkingslot)

// delete route
route.delete('/:id',deleteParkingslot)

module.exports = route