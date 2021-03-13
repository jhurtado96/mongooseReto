let mongoose = require("mongoose")
const { response } = require('express');
const express = require("express"); 
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());



mongoose.connect('mongodb://localhost:27017/dbUsuarios',
                   {useNewUrlParser: true, useUnifiedTopology: true})

const PhotoSchema = new mongoose.Schema({
    login:String,
    url:String,
    titulo:String,
    descripcion:String,
    
    
}

)

let PhotosModel =mongoose.model("Photos",PhotoSchema)

const UsuariosSchema = new mongoose.Schema({
    nombreUsuario:String,
    password:String,
    email:String,
    login:String,
    titulo:String,
    descripcion:String,
    follow:[{type: mongoose.Schema.ObjectId, ref:"Usuarios"}],
    imagenes:[{type: mongoose.Schema.ObjectId, ref:"Photos"}]
}

)

let UsuariosModel = mongoose.model("Usuarios",UsuariosSchema)

// let usuario = new UsuariosModel ({nombreUsuario: "hurti", password:"pepito",email:"rol@gmail.com",
// login:"hutii",titulo:"yo con mi gente",descripcion:"no se que estoy haciendo"});
// usuario.save(check);

// usuario = new UsuariosModel ({nombreUsuario: "pascu", password:"lel",email:"la@gmail.com",
// login:"pascuuu",titulo:"el",descripcion:"ni yo"});
// usuario.save(check);

// usuario = new UsuariosModel ({nombreUsuario: "rodri", password:"lol",email:"mu@gmail.com",
// login:"rodriii",titulo:"tu",descripcion:"yo tampoco"});
// usuario.save(check);

// usuario = new UsuariosModel ({nombreUsuario: "pablo", password:"lal",email:"so@gmail.com",
// login:"pabliiii",titulo:"yo ",descripcion:"y yo menos"});
// usuario.save(check);

// let foto = new PhotosModel ({login: "hurti", url:"javierhurtado.com",titulo:"yocongente",descripcion:"en la calle"})
// foto.save(check)
// foto = new PhotosModel ({login: "hurti", url:"javierhurtado.com",titulo:"conmenosgente",descripcion:"en la calle"})
// foto.save(check)
// foto = new PhotosModel ({login: "hurti", url:"javierhurtado.com",titulo:"conmucha",descripcion:"en la calle"})
// foto.save(check)
// foto = new PhotosModel ({login: "hurti", url:"javierhurtado.com",titulo:"cansado",descripcion:"en la calle"})
// foto.save(check)



UsuariosModel.updateOne({nombreUsuario:"pascu"},{$push:{imagenes:["604a4b613b949f2ab82b88d3","604a4b613b949f2ab82b88d5"]}},check)
UsuariosModel.updateOne({nombreUsuario:"rodri"},{$push:{imagenes:["604a4b613b949f2ab82b88d3","604a4b613b949f2ab82b88d5"]}},check)
UsuariosModel.updateOne({nombreUsuario:"hurti"},{$push:{imagenes:["604a4b613b949f2ab82b88d3","604a4b613b949f2ab82b88d5"]}},check)

// UsuariosModel.findOne({nombreUsuario:"pascu"})
// .populate('imagenes')
// .exec((err,usuarios) =>
// {
//     if(err){
//         console.log(err)
//         process.exit(-1)
//     }else{
        
//         console.log(usuarios)
//     }
// })

UsuariosModel.updateOne({nombreUsuario:"pascu"},{$push:{follow:["604a4b613b949f2ab82b88d1","604a4b613b949f2ab82b88ce"]}},check)
UsuariosModel.updateOne({nombreUsuario:"rodri"},{$push:{follow:["604a4b613b949f2ab82b88d1","604a4b613b949f2ab82b88ce"]}},check)
UsuariosModel.updateOne({nombreUsuario:"hurti"},{$push:{follow:["604a4b613b949f2ab82b88d1","604a4b613b949f2ab82b88ce"]}},check)

function timeLine(nombreUsuario){
    UsuariosModel.findOne({nombreUsuario:nombreUsuario})
    .populate({
        path : 'follow',
        populate : {
          path : 'imagenes'
        }
      })
    .exec((err,usuarios) =>
    {
        if(err){
            console.log(err)
            process.exit(-1)
        }else{
            
            for (let i = 0; i < usuarios.follow.length; i++) {
                for (let j = 0; j < usuarios.follow[i].imagenes.length; j++) {
                    console.log(usuarios.follow[i].imagenes[j])
                    
                }
                
            }
    
        }
    })
    

}

timeLine("pascu")

app.get("/",
    
    function(req,res){
        let respuesta=[];
UsuariosModel.findOne({nombreUsuario:"pascu"})
.populate({
    path : 'follow',
    populate : {
      path : 'imagenes'
    }
  })
.exec((err,usuarios) =>
{
    if(err){
        res.send(err)
        process.exit(-1)
    }else{
        
        for (let i = 0; i < usuarios.follow.length; i++) {
            for (let j = 0; j < usuarios.follow[i].imagenes.length; j++) {
                respuesta.push(usuarios.follow[i].imagenes[j])
                
            }
            res.send(respuesta)
        }

    }
})

})




function check(err,res){
    if(err){
        console.log("Error: "+ err)
    }
    else{
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}

app.listen(3000)