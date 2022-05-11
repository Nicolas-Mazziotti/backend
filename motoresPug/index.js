//Configuracion motor de plantilla PUG

const express = require("express")
const app = express()
const dataProducts = require("./productsData.json")


//SETEO
app.set("view engine", "pug")
app.set("views", "./views")


//Routes
app.get("/create", (req, res) => {
    res.render("form")
})

app.get("/products", (req, res) => {
    res.render("products", {data:dataProducts})
})


app.post("/create", (req, res) =>{
    let obj = req.body
    dataProducts.push(obj)
    res.render("products")
})

app.listen(8080, () => {
    console.log("Server 8080 Running")
})