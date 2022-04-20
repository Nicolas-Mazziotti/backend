const express = require("express")

const {Router} = express

let arrProducts = []

//instancio el Router
let router = new Router

router.get("/getAll", (req, res) =>{
    res.send({arrProducts})
})