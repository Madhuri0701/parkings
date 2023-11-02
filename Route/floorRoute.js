const { getFloor, postFloor, putFloor, deleteFloor } = require('../Controllers/floorController')
const route = require('express').Router()
// get route
route.get('/',getFloor)

// post route
route.post('/',postFloor)

// put route/update
route.put('/:id',putFloor)

// delete route
route.delete('/:id',deleteFloor)

module.exports = route