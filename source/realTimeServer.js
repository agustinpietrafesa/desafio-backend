/************SERVIDOR SOCKET*************/
const { Server } = require('socket.io')
const ProductManager = require('./classes/ProductManager')
ProductManager

const managerProducts = new ProductManager()


const realTimeServer = httpServer => {
    const io = new Server(httpServer)

    io.on('connection', socket => {
        console.log(`Se ha conectado el usuario ${socket.id}`)

        socket.on('newProductAdded', data => {
            managerProducts.addProduct(data)
            console.log(data)
        })

        socket.on('deleteProduct', info => {
            managerProducts.deleteProduct(info)
        })


    })
}

module.exports = realTimeServer


