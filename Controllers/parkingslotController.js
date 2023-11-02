const Parkingslot = require('../model/parkingslot')

// get logic
exports.getParkingslot = async (req, res) => {
    try {
        const data = await Parkingslot.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, Message: error.message })
    }
}

// post logic
exports.postParkingslot = async (req,res) =>{
    try {
       const data = await Parkingslot.create(req.body)
       return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// put/update logic
exports.putParkingslot = async(req,res) =>{
    try {
      const data = await Parkingslot.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
      return res.json({errors:false,data:data}) 
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}
// delete logic
exports.deleteParkingslot = async(req,res) =>{
    try {
        const data =await Parkingslot.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}