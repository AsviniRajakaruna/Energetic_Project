const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    mentor_name: { 
        type: String, 
        required: true 
    },
    house_holder_name: { 
        type: String, 
        required: true 
    },
    house_holder_address: {
        type: String,
        required: true
    },
    job_status:{
        type: String,
    },
    date_assigned:{
        type: Date,
        default: Date.now
    },
})


const mentor = mongoose.model('mentor', mentorSchema);

module.exports = mentor;