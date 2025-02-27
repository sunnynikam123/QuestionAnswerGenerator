const mongoose = require('mongoose');

const testadd = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    testid: {
        type: String,
        required: true
    },
    testname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    report: {
        type: String,
    },
})

const addusertest = mongoose.model("Test",testadd)
module.exports = addusertest