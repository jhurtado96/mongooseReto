const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema({
    name:{
        type:String,
        validate:[
        function(name){
            return name[0]==name.charAt(0).toUpperCase()
        },
        'La primera letra del nombre en mayuscula']
    },
    surname:{
        type:String,
        validate:[
        function(surname){
            return surname.charAt(0)==surname.charAt(0).toUpperCase()
        },
        'La primera letra del apellido en mayuscula']
    },
    dateOfBirth:String,
    comments:String,
    rol:{
        type:String,
        enum:["adc","support","mid","top","jungla"]
    }
})

ProfileSchema.pre('save',function(next){
    console.log("Middleware de entrada");
   
    if (this.rol == "adc") {
        console.log("Has escogido el rol de Rekkles")
        next(); //Next hace que la función sea valida
    }else{
        console.log("Este rol no es el de adc")
        next();
    }
   
   });
   

module.exports = mongoose.model("Profile",ProfileSchema)