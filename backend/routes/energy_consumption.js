const router = require('express').Router();
let EnergyConsumption = require('../models/energy_consumption');

router.route('/add').post((req, res) => {
    const owner_name = req.body.owner_name;
    const home_address = req.body.home_address;

    const newEnergyConsumption = new EnergyConsumption({
        owner_name,
        home_address,
    });

    newEnergyConsumption.save().then(() => {
        res.json('Energy Consumption added!')
    }).catch((err) => {
        console.log(err);
    });
});

router.route('/').get((req, res) => {
    EnergyConsumption.find().then((energy_consumptions) => {
        res.json(energy_consumptions)
    }).catch((err) => {
        console.log(err);
    });
});
// update deatails
router.route('/update/:id').post(async(req, res) => {
    let userid = req.params.id;
    const{ owner_name, home_address } = req.body;
    const updateEnergyConsumption = {
        owner_name,
        home_address,
    }
    const update = await EnergyConsumption.findByIdAndUpdate(userid, updateEnergyConsumption).then(() => {
 res.status(200).send({status: "Energy Consumption updated"})
    }).catch((err) => {
      console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
    })
})

// delete details
router.route("/delete/:id").delete(async(req, res) => {
 let userid = req.params.id;
 await EnergyConsumption.findByIdAndDelete(userid)
 .then(() => {
        res.status(200).send({status: "Energy Consumption deleted"});
 })
    .catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data" , error: err.message});
    })

})
module.exports=router;