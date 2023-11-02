const mongoose = require('mongoose')

const floorSchema = new mongoose.Schema({
   floorno : {
        type:Number,
        required:true
    },
     maxheightininch: {
        type:String,
        required:true
    },
    Numberofwing:{
        type:String,
       required:true
    },
    numberofSlots:{
        type:String,
        required:true

    },
    isCovered:{
        type:String,
        required:true
    },
    isAccessible:{
        type:String,
        required:true

    },
    isFloorfull:{
        type:String,
        required:true
    },
    isreservedregcust:{
        type:String,
        required:true
    },

    CreatedDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('floor',floorSchema)