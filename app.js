const express = require('express')
const mongoose = require('mongoose')
const parkingRoute = require('./Route/parkingRoute')
const parkingsloteRoute = require('./Route/parkingslotRoute')
const floorRoute = require('./Route/floorRoute')
const blockRoute = require('./Route/blockRoute')
require('dotenv/config')

const app = express()

app.use(express.json())
// by defalult route
app.get('/',(req,res)=>{
    res.send('Home')
})

// middleware
app.use(express.json())


// main route
app.use('/api/parking',parkingRoute)
app.use('/api/parkingslot',parkingsloteRoute)
app.use('/api/floor',floorRoute)
app.use('/api/block',blockRoute)


async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
      console.log("error ",error.message);  
    }
    
}
main()

app.listen(process.env.PORT || 5000)