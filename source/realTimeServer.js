/************SERVIDOR SOCKET*************/
const { Server } = require('socket.io')
const ProductManager = require('./classes/ProductManager')
ProductManager

const managerProducts = new ProductManager()


const realTimeServer = httpServer => {
    const io = new Server(httpServer)

    
    io.on('connection', socket => {
        console.log(`Cliente conectado ${socket.id}`)

        socket.on('newProductAdded', async data => {
            await managerProducts.addProduct(data)
            const allProducts = await managerProducts.getProducts()
            console.log(data)
            io.emit('newProductAdded', data);

        })
    })
}

module.exports = realTimeServer


