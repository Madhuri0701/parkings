const { getBlock, postBlock, putBlock, deleteBlock } = require('../Controllers/blockController')
const route = require('express').Router()
// get route
route.get('/',getBlock)

// post route
route.post('/',postBlock)

// put route/update
route.put('/:id',putBlock)

// delete route
route.delete('/:id',deleteBlock)

module.exports = route