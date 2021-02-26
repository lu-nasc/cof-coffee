const { response, request } = require('express')

const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        response.render('vendor/index', {
            title: "Vendedor"
        })
    })

module.exports = router