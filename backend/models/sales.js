const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({

  
    cust_name: { 
        type: String, 
        required: true 
    },
    street_addr: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    c_email:{
        type: String,
        required: true
    },
    phone_no:{
        type: String
    }
    
})


const Sales = mongoose.model('Sales', saleSchema);

module.exports = Sales;