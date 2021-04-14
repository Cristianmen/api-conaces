
const {validationResult} = require("express-validator");
const AWS = require('aws-sdk');
const USERS_TABLE = process.env.USERS_TABLE;

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.consultaAdmin = (req, res, next) => {

    const params = {};
    params.TableName = USERS_TABLE;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }

    try {

        
        dynamoDB.scan(params, (error, result) => {
            
            const correo=req.body.correo;
            const contraseña=req.body.contraseña;

            if (error) {
                console.log("entro error")
                console.log('putUser -> error:  ', error);
                res.status(400).json({
                    error: 'error'
                });
                
            } else {
                const { Items } = result;
                console.log("entro")
                Items.forEach(element => {
                    if(element.userId==corro && element.pass==contraseña){
                        res.status(200).json({
                            nombre : element.name
                        })
                    }else{
                        res.status(400).json({
                            
                            result : " no se encontro"
                        })
                    }
                    
                });
            }

        })
    } catch (e) {

        res.status(400).json({
            error: 'error'
        });

    }
};




exports.cliente1=(req,res,next)=>{
  
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
   
    }
    try{
       
        res.status(201).json({messege:"hola mundo" ,});
    }catch(e){
        console.log("error 2")
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
};