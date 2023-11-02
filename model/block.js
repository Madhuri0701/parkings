const mongoose = require('mongoose')
const BlockSchema = new mongoose.Schema({
    blockcode:{
        type:Number,
        required:true

    },
    numberofFlooers:{
        type:Number,
        required:true
    },
    isBlockfull:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('block',BlockSchema)
