const Customer = require('../models/customer')
const router = require('express').Router()

router
    .route('/:id')
    .get(async(request, response) => {
        try {
            const customer = await Customer.findById(this.params.id)
            response.render('customer/index', {
                title: "Cliente", customer: customer })
        } catch { response.status(500).redirect('https://http.cat/500') }
    })
    .delete(async(request, response) => {
        let customer
        try {
            customer = await Customer.findById(request.params.id)
            await customer.remove()
            response.redirect('/') 
        } catch { response.status(500).redirect('https://http.cat/500') }
    })
    .put(async(request, response) => {
        let customer
        try {
            customer = await Product.findById(request.params.id)
            customer.name = request.body.name.trim()
            customer.phone =  request.body.phone.trim()
            customer.address =  request.body.address.trim()
            customer.email = request.body.email.trim()
            customer.password = request.body.password.trim()
            await product.save()
            response.redirect('/')
        } catch { response.status(400).redirect('https://http.cat/400') }
    })

router
    .route('/login')
    .get(async(request, response) => {
        try {
            let customer =  await Customer.find(
                { "email": { $eq: request.body.email.trim() }})
            if (customer.password == request.body.password)
                response.redirect('/customer', {id: customer.id})
        } catch { response.status(400).redirect('https://http.cat/400') }
    })

router
    .route('/new')
    .get(async(request, response) => {
        let customer_model = {
            name:'',
            phone:'',
            address:'',
            email:'',
            password:''
        }
        response.render('customer/new', {  
            title: 'Cadastro de Cliente', 
            customer: customer_model
        }) 
    })
    .post(async(request,response) => {
        const customer = new Customer({
            name: request.body.name.trim(),
            phone: request.body.phone.trim(),
            address: request.body.address.trim(),
            email: request.body.email.trim(),
            password: request.body.password.trim()
        })
        try {
            const new_customer = await customer.save()
            response.redirect('/')
        } catch { response.status(400).redirect('https://http.cat/400') }
    })

module.exports = router