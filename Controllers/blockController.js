const Block = require('../model/block')

// get logic
exports.getBlock = async (req, res) => {
    try {
        const data = await Block.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, Message: error.message })
    }
}

// post logic
exports.postBlock = async (req,res) =>{
    try {
       const data = await Block.create(req.body)
       return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// put/update logic
exports.putBlock = async(req,res) =>{
    try {
      const data = await Block.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
      return res.json({errors:false,data:data}) 
    } catch (error) {
      return res.status(400).json({errors:true,message:error.message})  
    }
}
// delete logic
exports.deleteBlock = async(req,res) =>{
    try {
        const data =await Block.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}