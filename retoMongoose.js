let mongoose =require("mongoose");
let User = require("./users.js")
let Profile = require("./profile.js")
let Credentials = require("./credentials.js");
let Photo = require("./photo.js");
let Usuario = require("./usuarios.js")


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

let photosDocument = new Photo({
    login:"hurtado96",
    url:"www.insta.com",
    titulo:"yo en el campo",
    descripcion:"Que bonito el campo"
})

let usuariosDocument = new Usuario({
    nombreUsuario: "hurtado96",
    password: "elgatoconbotas",
    name: "Xavier",
    surname: "Hurtado",
    dateOfBirth: "17/04/1996",
    comments: "Hago lo que puedo",
    rol: "support",
    address: "calle tortola, Madrid",
    phone: 6925409688,
    email: "javierhurtado@gmail.com",
    login:"pepe14",
    url:"www.insta.com",
    titulo:"yo en el campo",
    descripcion:"Que bonito el campo",
    follow:"@sara26"

})

userDocument.save(checkRespuesta)
profileDocument.save(checkRespuesta)
credentialsDocument.save(checkRespuesta)
photosDocument.save(checkRespuesta)
usuariosDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err){
        console.log("Error: "+ err)
    }
    else{
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}
                 