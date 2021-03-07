const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
         required: true
    },
    salary: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('Vendor', vendorSchema)