const mongoose = require("mongoose")

const CredentialsSchema = new mongoose.Schema({
    address:String,
    phone:Number,
    email:{
        type:String,
        validate:[
            function(email){
                return email.includes('@')
            },
            'No es un email'
        ]
    }
})

CredentialsSchema.pre('save',function(next){
    console.log("Middleware de entrada");
   
    if (this.address.includes("Canarias")) {
        console.log("Se le cobrará un extra por envios")
        next();
        //Next hace que la función sea valida
    }else{
        console.log("No se le cobrarán gastos de envio")
        next();
    }
   
   });

module.exports = mongoose.model("Credentials",CredentialsSchema)