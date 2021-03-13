let mongoose = require("mongoose");
const { response } = require('express');
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dbUsuarios',
    { useNewUrlParser: true, useUnifiedTopology: true })


//    this.title = title;
//    this.releaseYear = releaseYear;
//    this.nationality = nationality;
//    this.genre = genre;
//    this.foto = foto
//    this.actors=actors
//    this.director = director;
//    this.guionista = guionista;
//    this.languaje = languaje;
//    this.plataform = plataform;
//    this.isMCU = isMCU;
//    this.mainCharacterName = mainCharacterName;

const MovieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    nationality: String,
    genre: String,
    foto: String,
    actors: [],
    directors: [],
    guionistas: [],
    language: String,
    plataform: String,
    isMCU: Boolean,
    mainCharacterName: String
})

let MovieModel = mongoose.model("Movie", MovieSchema)

const ProfessionalSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    weight: Number,
    height: Number,
    hairColor: String,
    eyeColor: String,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String,
    foto: String

}
)

let ProfessionalModel = mongoose.model("Professional", ProfessionalSchema)

// let pro1 = new ProfessionalModel ({name:"Javier",age:24,genre:"Masculino",weight:77,height:183,hairColor:"Brown",eyeColor:"Brown",isRetired:false,nationality:"Spanish",oscarsNumber:4,profession:"Guionista",foto:"hurti.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Pascu",age:28,genre:"Masculino",weight:70,height:173,hairColor:"Brown",eyeColor:"Brown",isRetired:true,nationality:"Spanish",oscarsNumber:1,profession:"Actor",foto:"pascu.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Fran",age:25,genre:"Masculino",weight:80,height:176,hairColor:"Black",eyeColor:"Green",isRetired:false,nationality:"German",oscarsNumber:2,profession:"Director",foto:"fran.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Jorge",age:28,genre:"Masculino",weight:80,height:172,hairColor:"Black",eyeColor:"Brown",isRetired:true,nationality:"Spanish",oscarsNumber:1,profession:"Actor",foto:"Jorge.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Rodri",age:28,genre:"Femenino",weight:80,height:172,hairColor:"Black",eyeColor:"Black",isRetired:false,nationality:"Ukranian",oscarsNumber:3,profession:"Actor",foto:"rodri.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Alberto",age:28,genre:"Masculino",weight:70,height:173,hairColor:"Brown",eyeColor:"Brown",isRetired:true,nationality:"Spanish",oscarsNumber:1,profession:"Guionista",foto:"pascu.jpg"});
// pro1.save(check)
// pro1 = new ProfessionalModel({name:"Charli",age:25,genre:"Masculino",weight:80,height:176,hairColor:"Black",eyeColor:"Black",isRetired:false,nationality:"German",oscarsNumber:2,profession:"Director",foto:"Charli.jpg"});
// pro1.save(check)




function check(err, res) {
    if (err) {
        console.log("Error: " + err)
    }
    else {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}


// let usuario = new UsuariosModel ({nombreUsuario: "hurti", password:"pepito",email:"rol@gmail.com",
// login:"hutii",titulo:"yo con mi gente",descripcion:"no se que estoy haciendo"});
// usuario.save(check);

// let movie = new MovieModel ({title:"El gato con botas",releaseYear:2008,nationality:"German",genre:"Infantil",foto:"elgato.jpg",actors:["el gato"," el principe de Bel-Air", "Martin Scorsese"],directors:["Carlos","Tarantino"],guionistas:["Manolo","Benito"],language:"English",plataform:"Netflix",isMCU:false,mainCharacterName:"El gato"})
// movie.save(check)
// movie = new MovieModel ({title:"Iron Man",releaseYear:2019,nationality:"EEUU",genre:"Accion",foto:"ironman.jpg",actors:["Ironman"," Thor", "Sara"],directors:["Kubrik","Tarantino"],guionistas:["Sara","Benito"],language:"English",plataform:"Netflix",isMCU:true,mainCharacterName:"Iron man"})
// movie.save(check)
// movie = new MovieModel ({title:"Thor",releaseYear:2018,nationality:"EEUU",genre:"Accion",foto:"thor.jpg",actors:["Maribel","Hugh Jackman", "Thor"],directors:["Stanley","Tarantino"],guionistas:["Carmina Ordonyez","Benito"],language:"English",plataform:"hbo",isMCU:true,mainCharacterName:"Thor"})
// movie.save(check)
// movie = new MovieModel ({title:"Spiderman",releaseYear:2016,nationality:"EEUU",genre:"Accion",foto:"spriderman.jpg",actors:["Peter","Spiderman", "Colera"],directors:["Lolo","Tarantino"],guionistas:["Pantoja","Benito"],language:"English",plataform:"amazon",isMCU:true,mainCharacterName:"Spiderman"})
// movie.save(check)
// movie = new MovieModel ({title:"Batman",releaseYear:2010,nationality:"EEUU",genre:"Accion",foto:"batman.jpg",actors:["el gato","Catwoman", "Batman"],directors:["Mariano","Tarantino"],guionistas:["Pepe","Benito"],language:"English",plataform:"blueray",isMCU:true,mainCharacterName:"Batman"})
// movie.save(check)
// movie = new MovieModel ({title:"La lista de Schindler",releaseYear:1999,nationality:"Auschwitz",genre:"Drama",foto:"shindler.jpg",actors:["shindler","Betty", "Charles"],directors:["Luis","Tarantino"],guionistas:["Donatello","Benito"],language:"English",plataform:"Netflix",isMCU:false,mainCharacterName:"Schindler"})
// movie.save(check)

app.get("/profesional",

    function (req, res) {

        let respuesta;
        id = req.query.id;
        if (req.query.id) {

            ProfessionalModel.find({ _id: id },
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(user)
                    }
                })


        } else {
            ProfessionalModel.find(
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(user)
                    }
                }
            )
        }




    }


);

app.post("/profesional",
    function (req, res) {
        let respuesta;
        let data = new ProfessionalModel({
            name: req.body.name,
            age: req.body.age,
            genre: req.body.genre,
            weight: req.body.weight,
            height: req.body.height,
            hairColor: req.body.hairColor,
            eyeColor: req.body.eyeColor,
            isRetired: req.body.isRetired,
            nationality: req.body.nationality,
            oscarsNumber: req.body.oscarsNumber,
            profession: req.body.profession,
            foto: req.body.foto
        })

        ProfessionalModel.create(data,
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {

                    res.send(user)
                }
            })

    }


)



app.put("/profesional",

    function (req, res) {
        
        

        let body = req.body
        
        
        ProfessionalModel.updateOne({_id:body._id},{
            $set: req.body
        },
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(user)
                }
            })



    }
);
app.delete("/profesional",

function(req,res){
    

        
        let id = req.body.id
        
        
            ProfessionalModel.deleteOne({_id:id},
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        
    }
)

app.get("/peliculas",

    function (req, res) {

        let respuesta;
        id = req.query.id;
        if (req.query.id) {

            MovieModel.find({ _id: id },
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(user)
                    }
                })


        } else {
            MovieModel.find(
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(user)
                    }
                }
            )
        }
    }

    


);

app.get("/peliculas/actor",

    function (req, res) {

        let respuesta=[];
       let id = req.query.id;
      

            MovieModel.findOne({ _id: id },
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        console.log(user)

                        for (let i = 0; i < user.actors.length; i++) {
                            respuesta.push(user.actors[i])                           
                        }
                        res.send(respuesta)
                    }
                })


    }
    
);

app.get("/peliculas/director",

    function (req, res) {

        let respuesta=[];
       let id = req.query.id;
      

            MovieModel.findOne({ _id: id },
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                       

                        for (let i = 0; i < user.directors.length; i++) {
                            respuesta.push(user.directors[i])                           
                        }
                        res.send(respuesta)
                    }
                })


    }
    
);

app.get("/peliculas/guionista",

    function (req, res) {

        let respuesta=[];
       let id = req.query.id;
      

            MovieModel.findOne({ _id: id },
                function (err, user) {
                    if (err) {
                        res.send(err)
                    } else {
                        console.log(user)

                        for (let i = 0; i < user.guionistas.length; i++) {
                            respuesta.push(user.guionistas[i])                           
                        }
                        res.send(respuesta)
                    }
                })


    }
    
);

app.post("/peliculas",
    function (req, res) {
        let respuesta;
        let data = new MovieModel({
            title: req.body.title,
            releaseYear: req.body.releaseYear,
            nationality: req.body.nationality,
            genre: req.body.genre,
            foto: req.body.foto,
            actors:req.body.actors,
            directors: req.body.directors,
            guionistas:req.body.guionistas,
            language: req.body.language,
            plataform: req.body.plataform,
            isMCU: req.body.isMCU,
            mainCharacterName: req.body.mainCharacterName
        })

        MovieModel.create(data,
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {

                    res.send(user)
                }
            })

    }


)

app.post("/peliculas/actor",
    function (req, res) {
        
        let id = req.body.id
        let actor = req.body.actor
        MovieModel.updateOne({_id:id},
            {$push:{actors:actor}},
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    
                    
                   
                    res.send(user)
                }
            })
            
            
        

    }


)

app.post("/peliculas/director",
    function (req, res) {
        
        let id = req.body.id
        let director = req.body.director
        MovieModel.updateOne({_id:id},
            {$push:{directors:director}},
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    
                    
                   
                    res.send(user)
                }
            })
            
            
        

    }


)

app.post("/peliculas/guionista",
    function (req, res) {
        
        let id = req.body.id
        let guionista = req.body.guionista
        MovieModel.updateOne({_id:id},
            {$push:{guionistas:guionista}},
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    
                    
                   
                    res.send(user)
                }
            })
            
            
        

    }


)

app.put("/peliculas",

    function (req, res) {
        
        

        let body = req.body
        
        
        MovieModel.updateOne({_id:body._id},{
            $set: req.body
        },
            function (err, user) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(user)
                }
            })



    }
);

app.delete("/peliculas",

function(req,res){
    

        
        let id = req.body.id
        
        
            MovieModel.deleteOne({_id:id},
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        
    }
)

app.delete("/peliculas/actor",

function(req,res){
    

        
        let id = req.body.id
        let name = req.body.name
        
            MovieModel.updateOne({_id:id},
                {$pull:
                    {
                        actors:name
                    }
                },
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        
    }
)

app.delete("/peliculas/director",

function(req,res){
    

        
        let id = req.body.id
        let name = req.body.name
        
            MovieModel.updateOne({_id:id},
                {$pull:
                    {
                        directors:name
                    }
                },
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        
    }
)

app.delete("/peliculas/guionista",

function(req,res){
    

        
        let id = req.body.id
        let name = req.body.name
        
            MovieModel.updateOne({_id:id},
                {$pull:
                    {
                        guionistas:name
                    }
                },
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        
    }
)

app.listen(3001)