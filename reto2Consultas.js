let mongoose =require("mongoose");
let User = require("./users.js")
let Profile = require("./profile.js")
let Credentials = require("./credentials.js");
let Photo = require("./photo.js");
let Usuario = require("./usuarios.js")


mongoose.connect('mongodb://localhost:27017/dbUsuarios',
                   {useNewUrlParser: true, useUnifiedTopology: true})


   
    



// let documentoPhoto = new Photo(newPhoto)

//     documentoPhoto.save()
//         .then(function(){
//             console.log("Documento guardado correctamente")
//         })
//         .catch(function(){
//             console.log("Error al escribir documento")
//         })



function subidaDeFoto(login,url,titulo,descripcion){
    
    let data =  new Photo( {
        login:login,
        url:url,
        titulo:titulo,
        descripcion:descripcion       
    })

    Photo.create(data,check)
}

// subidaDeFoto("Papote Malote","www.school.com","yop","pasandolo bien")

function obtenerFotos(login){
    Photo.find({login:login},check)
}


// obtenerFotos("Papote Malote")   
function seguir(nombreOrigen,nombreDestino){
    Usuario.updateOne({login:nombreOrigen},{follow:nombreDestino},check)
}

// seguir("hurtado96","El gato con botas")

function dejarDeSeguir(nombreOrigen,nombreDestino){
    
    Usuario.updateOne({login:nombreOrigen,follow:nombreDestino},{follow:null},check)

}

// dejarDeSeguir("hurtado96","Pablo")

function eliminarFoto(nombreUsuario,tituloFoto){
    Photo.deleteOne({login:nombreUsuario,titulo:tituloFoto},check)
}
// eliminarFoto("hurtado96","yo en el campo")

function eliminarTodasLasFotos(nombreUsuario){
    Photo.deleteMany({login:nombreUsuario},check)
}

function check(err,res){
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
}