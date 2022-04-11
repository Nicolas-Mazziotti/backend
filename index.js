 const fs = require ('fs')

//Utilizo el modulo express
const express = require('express')

//Guardo ejecucion de express
const app = express()

//1- traigo los productos del array con get primer parametro endpoint 2- callback
app.get('/products', (req, res) => {
    //Leo el json y me lo traigo
    fs.readFile('./products.json', 'utf-8', (err, data) => {
        if(err){
            res.send({message: 'Error en la consulta'})
        } else {
            res.send(data)
        }
    })
})

//Me traigo un producto random
app.get('/randomProducts', (req, res) => {
    //Leo el json y me lo traigo
    fs.readFile('./products.json', 'utf-8', (err, data) => {
        if(err){
            res.send({message: 'Error en la consulta'})
        } else {
            //uso metodo floor y random para que devuelva un producto al azar
            let newProductsArray = JSON.parse(data)
            let randomProducts = newProductsArray[Math.floor(Math.random() * newProductsArray.length)]
            res.send(randomProducts);
        }
    })
    
})





//Escucho el servidor
app.listen(8080, () =>{
    console.log('Servidor funcionando')
});