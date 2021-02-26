const { response, request } = require('express')

const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        response.render('customer/index', {
            title: "Cliente"
        })
    })

module.exports = router