const { response, request } = require('express')

const router = require('express').Router()

router
    .route('/')
    .get(async(request, response) => {
        response.render('index', {
            title: "Cafeteria Genérica"
        })
    })

module.exports = router