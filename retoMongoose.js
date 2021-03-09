let mongoose =require("mongoose");
let User = require("./users.js")
let Profile = require("./profile.js")
let Credentials = require("./credentials.js")


mongoose.connect('mongodb://localhost:27017/dbUsuarios',
                   {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User({
    login: "hurtado96",
    password: "elgatoconbotas"
})

let profileDocument = new Profile({
    name: "Xavier",
    surname: "Hurtado",
    dateOfBirth: "17/04/1996",
    comments: "Hago lo que puedo",
    rol: "support"
})

let credentialsDocument = new Credentials({
    address: "calle tortola, Madrid",
    phone: 6925409688,
    email: "javierhurtado@gmail.com"
})

userDocument.save(checkRespuesta)
profileDocument.save(checkRespuesta)
credentialsDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err){
        console.log("Error: "+ err)
    }
    else{
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}
                 