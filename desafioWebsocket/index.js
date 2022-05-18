//Configuracion del BACK

const express = require("express")
const {engine} = require("express-handlebars")
const app = express()
const router = require("./routes/index")

// configuro handlebars
app.set("view engine", "hbs") 
app.set("views", "./views") // almaceno las vistas html con hbs


app.engine(
    "hbs",
    engine({
        extname:"hbs",
        layoutDir: __dirname + "/views/layouts",
        defaultLayout: "main.hbs",
        partialsDir: __dirname + "/views/partials"         //componentes reutilizables
    })
)

 //Archivo estaticos
app.use(express.static(__dirname+ "/public"))

//Routes
app.use("/api", router) // configuro para que todas las rutas tenga /api path

//Creo el servidor mediante modulo nativo http
const http = require("http")
const server = http.createServer(app) //app = para que el servidor sea basado en express y sus funcionalidades

const port = process.env.PORT || 3005// elije el puerto que se le asigna una vez en la nube sino el 8080

//Servidor de socket
const { Server, Socket } = require("socket.io")
const io = new Server (server) //le paso el servidor que cree nativo http

//Abro un canal del servidor parte del back
io.on("connection", (socket) => { //socket contiene todos los eventos io, emit ,etc
    console.log("Usuario conectado")
})

server.listen(port, () => {
    console.log("Port Running" + port)
})