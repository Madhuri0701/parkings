const Floor = require('../model/floor')

// get logic
exports.getFloor = async (req, res) => {
    try {
        const data = await Floor.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, Message: error.message })
    }
}

// post logic
exports.postFloor = async (req,res) =>{
    try {
       const data = await Floor.create(req.body)
       return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// put/update logic
exports.putFloor = async(req,res) =>{
    try {
      const data = await Floor.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
      return res.json({errors:false,data:data}) 
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}
// delete logic
exports.deleteFloor = async(req,res) =>{
    try {
        const data =await Floor.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}
