/************SERVIDOR*************/
const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./router')

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

router(app)


app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})
