let mongoose =require("mongoose");
let User = require("./users.js")
let Profile = require("./profile.js")
let Credentials = require("./credentials.js");
let Photo = require("./photo.js");
let Usuario = require("./usuarios.js")
const express = require("express");
const { response } = require('express');
 
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/', function (req,res){
    res.send('Hello from server')
});


mongoose.connect('mongodb://localhost:27017/dbUsuarios',
    {useNewUrlParser: false, useUnifiedTopology: false})

    app.get("/photos",
    
    function(req,res){

        let respuesta;
        
        if (req.query.login) {
            login = req.query.login;
            Photo.find({login:login},
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })
            

        }else{
            respuesta ={error:false, codigo:200, mensaje:'No hay fotos con ese login'}
            res.send(respuesta)
        }
     
        


    }
    

);  

app.post("/photos",
    function(req,res){
        let respuesta;
        let data =  new Photo( {
                 login: req.body.login,
                 url: req.body.url,
                 titulo:req.body.titulo,
                 descripcion:req.body.descripcion
        
        }
                  
        )
    
        Photo.create(data,
            function(err,user){
                if (err) {
                    res.send(err)
                } else{
                    res.send(user)
                }
            })
            
    }


)


app.delete("/photos",

function(req,res){
    let respuesta;

        
        let titulo = req.body.titulo
        let login = req.body.login
        if(!req.body.titulo){
            Photo.deleteMany({login:login},
                function(err,user){
                    if (err) {
                        res.send(err)
                    } else{
                        res.send(user)
                    }
                })   
                
        } else {
            
                Photo.deleteOne({login:login,titulo:titulo},
                    function(err,user){
                        if (err) {
                            res.send(err)
                        } else{
                            res.send(user)
                        }
                    })    
        }
    }
)

app.put("/photos",

 function(req,res){
     let respuesta;
     let login = req.body.login
     let follow = req.body.follow
     Usuario.updateOne({login:login},{follow:follow},
        function(err,user){
            if (err) {
                res.send(err)
            } else{
                res.send(user)
            }
        })   

     
     
 }
 );

 app.put("/follow",

 function(req,res){
     let respuesta;
     let login = req.body.login
     let follow = req.body.follow
     Usuario.updateOne({login:login},{follow:follow},
        function(err,user){
            if (err) {
                res.send(err)
            } else{
                res.send(user)
            }
        })   

     
     
 }
 );

 app.put("/unfollow",

 function(req,res){
     let respuesta;
     let login = req.body.login
     let follow = req.body.follow
     Usuario.updateOne({login:login,follow:follow},{follow:null},
        function(err,user){
            if (err) {
                res.send(err)
            } else{
                res.send(user)
            }
        })   

     
     
 }
 );


app.listen(3000)