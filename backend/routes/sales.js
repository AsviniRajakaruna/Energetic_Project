const router = require('express').Router();
let Sales = require('../models/sales');
const User = require('../models/user');

router.route('/add').post(async (req, res) => {

    const { cust_name, street_addr, city, c_email, phone_no } = req.body;


    const newSales = new Sales({
        
        cust_name,
        street_addr,
        city,
        c_email,
        phone_no

    });

    await newSales
        .save()
        .then(() => res.status(200).json({ success: true }))
        .catch((error) => res.status(500).json({ success: false, error: error })); // else save to the db
});
router.route('/').get((req, res) => {
    Sales.find().then((sales) => {
        res.json(sales)
    }).catch((err) => {
        console.log(err);
    });
});

// update deatails
router.route('/update/:id').post(async (req, res) => {
    let userid = req.params.id;
    const { cust_name, street_addr, city, c_email, phone_no } = req.body;
    const updateSales = {
        cust_name,
        street_addr,
        city,
        c_email,
        phone_no,
    }
    const update = await Sales.findByIdAndUpdate(userid, updateSales).then(() => {
        res.status(200).send({ status: "sales updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
});


// delete details
router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id;
    await Sales.findByIdAndDelete(userid)
        .then(() => {
            res.status(200).send({ status: "sales deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting data", error: err.message });
        })

})

module.exports = router;
