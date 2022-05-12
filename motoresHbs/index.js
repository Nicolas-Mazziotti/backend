const express = require("express")
const {engine} = require ("express-handlebars")
const app = express ()

const productosArr = require("./dataProducts.json")

app.set("views", "./views")
app.set("view engine", "hbs")

app.engine(
    "hbs",
    engine({
        extname:"hbs",
        layoutDir: __dirname + "/views/layouts",
        defaultLayout: "index",
        //componentes reutilizables
        partialsDir: __dirname + "/views/partials"
    })
)


app.get ("/products", (req, res) => {
    res.render("products", {layouts: "index,", data:productosArr} )
})

app.get("/create", (req, res) =>{
    res.render("form")
})

app.post("/create", (req, res) =>{
    let obj = req.body
    productosArr.push(obj)
    res.render("products")
})
app.listen (8080, () => {
    console.log("Port 8080 running")
})