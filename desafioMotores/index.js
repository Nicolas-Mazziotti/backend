const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()
const productosArr = require("./productsData.json")

app.use(express.static("public"));
//middleware (convierte informacion que viene del body a json)
app.use(express.json())
//formateo la url
app.use(express.urlencoded({extended:true}))

//seteo ejs motor de plantilla para hacer peticiones de cliente
app.set("view engine", "ejs")
app.set("views,", "./views")


//obtengo productos (get para obtener informacion del servidor)
 app.get("/getAll", (req, res) => {
     //renderiza index dentro de views
    res.render("index", {data:productosArr})
 })
 //get para obtener el formulario
 app.get("/form", (req, res) =>{
     res.render("form")
 })


//creo productos (envio informacion al servidor)
app.post("/create", (req, res) =>{
    let obj = req.body
    productosArr.push(obj)
    res.render("saveProduct")
})


app.listen(8080, () =>{
    console.log("Server Running")
})