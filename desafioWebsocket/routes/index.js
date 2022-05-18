const express = require("express")

const {Router} = express //desestructuro metodo de express Router

const router = new Router()

// me traigo los productos
const productsData = require("../productsData.json")

//Creo la ruta index para meter el formulario los productos y el chat
router.get("/index", (req,res) => {
    res.render("index.hbs",{data:productsData})
})



module.exports = router