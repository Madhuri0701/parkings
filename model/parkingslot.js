const mongoose = require('mongoose')

const parkinglotSchema = new mongoose.Schema({
   slotnumber : {
        type:Number,
        required:true
    },
     wingcode: {
        type:Number,
        required:true
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    }
    
    
})
module.exports = mongoose.model('parkinglot',parkinglotSchema)