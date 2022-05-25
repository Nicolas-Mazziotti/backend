//CLIENTE
const socket = io() // a traves del script en el index llamo a io y el form ya se conecta
    socket.on("message_back", (data)=> {
        console.log(data)
        renderProducts(data)
        socket.emit("message_client", "Envio render")
    })

    socket.on("mensaje_back", (mensajesData) => {
        console.log(mensajesData)
        renderMensajes(mensajesData)
        socket.emit("mensaje_cliente", "Envio render Mensajes")
    })


    //funcion de lo que se renderiza en el html de productos agregados
    const renderProducts = (data) => {
        let html = data.map(prod => {
            return `
            <ul>
                <li> <img src= ${prod.img} > : ${prod.modelo} : ${prod.precio} </li>
            </ul>            `
        }).join(" ")

        document.querySelector("#containerProductos").innerHTML = html
    }

    //funcion para que el cliente agregue los products desde el form
    const addProduct = () => {
        console.log("hola")

        let objForm= {
            modelo: document.querySelector("#formModelo").value,
            precio: document.querySelector("#formPrecio").value,
            img: document.querySelector("#formImagen").value,
    }
        socket.emit("data_client", objForm)
        
}

    const btnSubmit = document.querySelector("#btnSubmit")
    btnSubmit.addEventListener("click", addProduct)

    
    
    //funcion de lo que se renderiza en el html de mensajes agregados
    
    const renderMensajes = (mensajesData) => {
    
            const h = new Date();
        
        let html = mensajesData.map(msj =>{
            return `
            <strong> ${msj.email} : ${h}</strong>
            <p> ${msj.mensaje}</p>
            `
        }).join (" ")
        document.querySelector("#containerMensajes").innerHTML = html
    }

    //funcion para que el cliente agregue los mensajes desde el form

    const addMessage = () => {
        
        // const formularioMsj = document.getElementById('formulario')
        // formularioMsj.onsubmit = (e) => {
        //     e.preventDefault()
        // 
    
        let objForms = 
    {
        email: document.querySelector("#formEmail").value,
        mensaje: document.querySelector("#formMensaje").value
    }
        socket.emit("data_mensajes", objForms)
        
}
const btnEnviar = document.querySelector("#btnMensajes")
btnEnviar.addEventListener("click", addMessage)

