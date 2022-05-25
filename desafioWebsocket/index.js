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

//Array de productos
const productosCargados = []
const mensajesCargados = []

//Servidor de socket
const { Server, Socket } = require("socket.io")
const io = new Server (server) //le paso el servidor que cree nativo http

//Abro un canal del servidor parte del back
io.on("connection", (socket) => { //socket contiene todos los eventos io, emit ,etc
    console.log("Usuario conectado al form")
    //productos
    socket.emit("message_back", productosCargados) //envio array de productos al front
    socket.on("message_client",(data) =>{
        console.log(data)
    })
    socket.on("data_client", (data) =>{
        console.log(data)

        productosCargados.push(data)
        io.sockets.emit("message_back", productosCargados) // conecto a todos los que esten en el servidor
    })

    //chat
    socket.emit("mensaje_back", mensajesCargados)
    socket.on("mensaje_cliente", (mensajesData) => {
        console.log(mensajesData)
    })
    socket.on("data_mensajes", (mensajesData) => {
        console.log(mensajesData)
        mensajesCargados.push(mensajesData)
        io.sockets.emit("mensaje_back", mensajesCargados) // conecto a todos los que esten en el servidor
    })
    
})



server.listen(port, () => {
    console.log("Port Running" + port)
})