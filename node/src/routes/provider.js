const { response, request } = require('express')

const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        response.render('provider/index', {
            title: "Provedor"
        })
    })

module.exports = router