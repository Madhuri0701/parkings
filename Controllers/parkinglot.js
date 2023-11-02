const Parking = require('../model/parking')

// get logic
exports.getParkig = async (req, res) => {
    try {
        const data = await Parking.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, Message: error.message })
    }
}

// post logic
exports.postParking = async (req,res) =>{
    try {
       const data = await Parking.create(req.body)
       return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// put/update logic
exports.putParking = async(req,res) =>{
    try {
      const data = await Parking.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
      return res.json({errors:false,data:data}) 
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}
// delete logic
exports.deleteParking = async(req,res) =>{
    try {
        const data =await Parking.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}