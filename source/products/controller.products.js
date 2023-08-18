const { Router } = require("express")
const ProductManager = require('../classes/ProductManager')

const router = Router()
const managerProducts = new ProductManager()

router.get('/', async (req, res) => {
    const allProducts = await managerProducts.getProducts()
    console.log(allProducts)
    res.render('products', {
        products: allProducts,
        style: 'products.styles.css'
    })
})

module.exports = router
