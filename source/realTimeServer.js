/************SERVIDOR SOCKET*************/
const { Server } = require('socket.io')


const realTimeServer = httpServer => {
    const io = new Server(httpServer)

    io.on('connection', socket => {
        console.log(`Se ha conectado el usuario ${socket.id}`)



        io.emit('mensaje', "hola a todos")

    })



}

module.exports = realTimeServer


