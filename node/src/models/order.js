const mongoose = require('mongoose')
const Product = require('product')

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Customer'
    },
    products: {
        type: [Product],
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)