
let mongoose = require("mongoose")



const PhotoSchema = new mongoose.Schema({
    login:String,
    url:String,
    titulo:String,
    descripcion:String,
    
    
}

)

// UserSchema.pre('save',function(next){
//  console.log("Middleware de entrada");

//  if (this.login == "hurtado96") {
//      console.log("Tienes un usuario muy bonito")
//      next();
//  }else{
//      console.log("No es tan bonito como hurtado96")
//  }

// });

module.exports = mongoose.model("Photo",PhotoSchema)
