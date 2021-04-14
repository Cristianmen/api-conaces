const express =require("express");
const bodyParse= require("body-parser");
const itemRoute= require("./routes/item_route");
const serverless= require("serverless-http")

const app=express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));


//rutas

app.use('/api/items',itemRoute);

//responder

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data=error.data;
    res.status(status).json({message,data});
})

module.exports.generic = serverless(app);