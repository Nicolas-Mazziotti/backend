//CLIENTE
const socket = io() // a traves del script en el index llamo a io y el form ya se conecta
    socket.on("message_back", (data)=> {
        console.log(data)
        render(data)
        socket.emit("message_client", "Envio render")
    })


    //funcion de lo que se renderiza en el html de productos agregados
    const render = (data) => {
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
addProduct()     