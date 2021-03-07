const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
         required: true
    },
    speciality: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Provider', providerSchema)