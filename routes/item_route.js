const{body}=require("express-validator");
const express=require("express");
const control=require('../controllers/control');
const Router = express.Router();

Router.get(
    "/cliente",[
        body("correo")
        .exists()
        .withMessage("el correo es requerido ")
        .matches(/([\w|\d]+@+[\w]+[.][\w]{2,4})+$/) 
        .withMessage("EL VALOR solo son numeros")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL Nombre ES REQUERIDO")
        .matches(/[a-zA-Z]+$/) 
        .withMessage("EL VALOR solo son letras")
        .trim()
        .escape(),
    ],control.cliente1);

    Router.post(
        "/consultaAdmin",[
            body("userId")
                .exists()
                .withMessage("el correo es requerido ")
                .matches(/([\w|\d]+@+[\w]+[.][\w]{2,4})+$/) 
                .withMessage("EL VALOR solo son numeros")
                .trim()
                .escape(),
                body("pass")
                .exists()
                .withMessage("la contraseña  ES REQUERIDO")
                .matches(/[a-zA-Z0-9]+$/) 
                .withMessage("EL VALOR solo son letras y numeros")
                .trim()
                .escape(),
        ],control.consultaAdmin);

    module.exports=Router;