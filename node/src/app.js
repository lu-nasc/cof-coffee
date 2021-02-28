const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
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

// Configuração de conexão com banco de dados MongoDB
mongoose
.connect('mongodb://mongo:27017/mongodb_express', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Successfully conected to database.'))
.catch((error) => {
    console.error('Connection to database has failed. Exiting', error) 
    process.exit()  
})

// Conexão com banco de dados
const banco_de_dados = mongoose.connection
banco_de_dados.on('error', erro => console.error(erro));
banco_de_dados.once('open', () => console.log('mongoose working, connection with MongoDB database on port 27017 stablished.'))

// Log de funcionamento da aplicação
app.listen(8000, () => console.log('application running on port 8000'))