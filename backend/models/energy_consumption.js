const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const energyConsumptionSchema = new Schema({
    owner_name: { 
        type: String, 
        required: true 
    },
    home_address: {
        type: String,
        required: true
    },
})


const EnergyConsumption = mongoose.model('EnergyConsumption', energyConsumptionSchema);

module.exports = EnergyConsumption;