const mongoose = require('mongoose');

// Mongoose
const contactRequestSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const contactReq = mongoose.model('ContactRequest', contactRequestSchema);

module.exports = contactReq;