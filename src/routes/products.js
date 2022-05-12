const express = require("express")
const { Router } = express
// const multer = require("multer")
const _ = require("underscore") 
//Traigo el json de products
const productsData = require("../productsData.json")
console.log(productsData)

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, "uploads")
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })

// let upload = multer ({storage})
//intancio Router
let router = new Router()

//Defino nuevas Routes con router

//Muestro todos los productos
router.get ("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
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

// Actualizar productos

    router.put("/:id", (req, res) =>{
        const {id} = req.params
        const {modelo, precio} = req.body
        if(modelo && precio){
            productsData.forEach((product, i) =>{
                if(product.id == id){
                    product.modelo = modelo
                    product.precio = precio
                }
            })
            res.json(productsData)
        }else{
            res.json({error: "Error no se pudo actualizar"})
        }
    })

// Elimino  productos segun su id

    router.delete("/:id", (req, res) => {
        const { id } = req.params;
        productsData.forEach((product, i) =>{
            if(product.id == id){
                productsData.splice(i, 1)
            }
        } )
        res.send(productsData)
        })
        
    


// exporto router
module.exports = router