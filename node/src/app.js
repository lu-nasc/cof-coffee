const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const app = express()



// Configuração das ferramentas de frontend (EJS)
app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'html')

// Configuração para receber dados JSON da página web
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))

// Inicialização das rotas da aplicação (Controladora)
app.use('/', require('./routes/main'))
app.use('/customer', require('./routes/customer'))
app.use('/vendor', require('./routes/vendor'))
app.use('/product', require('./routes/product'))
app.use('/provider', require('./routes/provider'))


app.listen(8000)
console.log('application running on port 8000')