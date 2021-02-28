const Product = require('../models/product') 
const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        try {
            const products = await Product.find({})
            response.render('product/index', 
                            {   title: 'Produtos', 
                                products })
        } catch (error){ response.status(500).redirect('https://http.cat/500') }
    })

router
    .route('/new')
    .get(async(request, response) => {
        let product_model = {
            name: '',
            description: '',
            price: 0.0
        }
        response.render('product/new', {
            title: "Cadastro de Produto",
            product: product_model
        })
    })
    .post(async(request, response) => {
        const product = new Product({
            name: request.body.name.trim(),
            description: request.body.description.trim(),
            price: priceTreatment(request.body.price)
        })
        try {
            const fresh_product = await product.save()
            response.redirect('/product')
        } catch (error) { response.status(400).redirect('https://http.cat/400') }
    })

function priceTreatment(price) {
    return parseFloat(price.replace(',', '.'))
}

module.exports = router