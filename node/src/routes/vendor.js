const Vendor = require('../models/vendor')
const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        try {
            const vendors = await Vendor.find({})
            response.render('vendor/index', 
                { title: "Vendedor", vendors })
        } catch { response.status(500).redirect('https://http.cat/500') }
    })

router
    .route('/new')
    .get(async(request, response) =>{
        let vendor_model = {
            name: '',
            email: '',
            salary: 0.0,
        }
        response.render('vendor/new', {
            title: 'Cadastro de Vendedor',
            vendor: vendor_model
        })
    })
    .post(async(request, response) =>{
        const vendor = new Vendor({
            name: request.body.name.trim(),
            email: request.body.email.trim(),
            salary: salaryTreatment(request.body.salary)
        })
        try {
            const new_vendor = await vendor.save()
            response.redirect('/vendor')
        } catch { response.status(400).redirect('https://http.cat/400') }
    })

router
    .route('/:id')
    .put(async(request, response) =>{
        let vendor
        try {
            vendor = await Vendor.findById(request.params.id)
            vendor.name = request.body.name.trim()
            vendor.email = request.body.email.trim()
            vendor.salary = salaryTreatment(request.body.salary)
            await vendor.save()
            response.redirect('/vendor')
        } catch { response.status(400).redirect('https://http.cat/400') }
    })
    .delete(async(request, response) =>{
        let vendor
        try {
            vendor = await Vendor.findById(request.params.id)
            await vendor.remove()
            response.redirect('/vendor')
        } catch { response.status(500).redirect('https://http.cat/500') }
    })
    .get(async(request, response) =>{
        try {
            const vendor = await Vendor.findById(request.params.id)
            response.render('vendor/show', { vendor: vendor })
        } catch { response.redirect('/') }
    })

router
    .route('/:id/edit')
    .get(async(request, response) =>{
        try{
            const vendor = await Vendor.findById(request.params.id)
            response.render('vendor/edit', { vendor: vendor })
        }catch { response.redirect('/vendor') }
    })

function salaryTreatment(price) {
    return parseFloat(price.replace(',', '.'))
}

module.exports = router