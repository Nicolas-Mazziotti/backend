const express = require ("express")
// const multer = require ("multer")
const app = express()
//Me traigo products y categories al index
const productsRoutes = require("./routes/products")


//Middleware
app.use("/static", express.static("public"))
//MW servidor recibe formato json y los lee
app.use(express.json())


//Routes
app.use("/api/products" , productsRoutes)

//Empezando el servidor
app.listen(8080, ()=>{
    console.log(`Server on Port${3000}`)
})