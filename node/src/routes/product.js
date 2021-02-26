const { render } = require('ejs')
const { response, request } = require('express')

const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        response.render('product/index', {
            title: "Produtos",
            products: [{
                    name: 'Expresso curto',
                    description: 'café coado bom pra dar aquele ponta pé inicial no dia',
                    price: 2.5
                },
                {
                    name: 'Expresso longo',
                    description: 'café coado bom pra dar vontade de cagar na empresa',
                    price: 5.0
                }
            ]
        })
    })

router
    .route('/new')
    .get(async(request, response) => {
        let product_model = {
            name: null,
            description: null,
            price: null
        }
        response.render('product/new', {
            title: "Cadastro de Produto",
            product: product_model
        })
    })
    .post(async(request, response) => {
        console.log({
            name: request.body.name.trim(),
            description: request.body.description.trim(),
            price: priceTreatment(request.body.price)
        })
        response.redirect('/product')
    })

function priceTreatment(price) {
    return parseFloat(price.replace(',', '.'))
}

module.exports = router