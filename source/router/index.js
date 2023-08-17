const productsController = require('../products/controller.products')
const RTPController = require('../products/controller.RTP')

const router = app => {
    app.use('/products', productsController)
    app.use('/realtimeproducts', RTPController)
}

module.exports = router