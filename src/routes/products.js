const express = require("express")
const { Router } = express
//Traigo el json de products
const productsData = require("../productsData.json")
console.log(productsData)


//intancio Router
let router = new Router()

//Defino nuevas Routes con router
router.get ("/", (req, res) => {
    res.json(productsData)
})

//almaceno datos, si recibo productos con modelo y precio los pushea 
router.post("/", (req, res) => {
    const {modelo, precio} = req.body
    if(modelo && precio) {
        const id = productsData.length + 1
        const newProduct = {...req.body, id}
        console.log(newProduct)
        productsData.push(newProduct)
        res.json(productsData)
    } else {
        res.send("Error en el ingreso")
    }
    

})


// exporto router
module.exports = router