
let mongoose = require("mongoose")



const UserSchema = new mongoose.Schema({
    login:{
        type: String,
        enum: ["hurtado96","hurtado33","paco","pepe","fran","pascu","rodri","alberto"]
    },
    password:{
        type:String,
        validate:[
        function(password){
            return password.length>= 8;

            
        },
        'El password es muy corto']
    }
}

)

UserSchema.pre('save',function(next){
 console.log("Middleware de entrada");

 if (this.login == "hurtado96") {
     console.log("Tienes un usuario muy bonito")
     next();
 }else{
     console.log("No es tan bonito como hurtado96")
 }

});

module.exports = mongoose.model("User",UserSchema)

