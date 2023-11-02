const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
   numberofblock : {
        type:Number,
        required:true
    },
     Isslotavailable: {
        type:String,
        required:true
    },
    address:{
        type:String,
    required:true
    },
    zip:{
        type:Number,
        required:true

    },
    isRentryallowed:{
        type:String,
        required:true
    },
    operatingCompanyName:{
        type:String,
        required:true

    },
    isValetparkingAvalible:{
        type:String,
        required:true
    },

    CreatedDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('parking',parkingSchema)