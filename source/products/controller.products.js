const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.render('products')
})

router.post('/', (req, res) => { 
   console.log(req.body)
   res.json({message: 'usuario creado'})
})


module.exports = router
