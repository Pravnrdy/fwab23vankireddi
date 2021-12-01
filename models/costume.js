const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {type:String, minlength:3}, 
 cost: {type:Number,min:30,max:300} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 