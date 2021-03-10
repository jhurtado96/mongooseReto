let mongoose = require("mongoose")



const UsuariosSchema = new mongoose.Schema({
    nombreUsuario:String,
    password:String,
    name:String,
    surname:String,
    dateOfBirth:String,
    comments:String,
    rol:String,
    address:String,
    phone:Number,
    email:String,
    login:String,
    url:String,
    titulo:String,
    descripcion:String,
    follow:String
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

module.exports = mongoose.model("Usuario",UsuariosSchema)

