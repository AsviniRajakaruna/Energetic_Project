const router = require('express').Router();
let Mentor = require('../models/mentor');

router.route('/add').post((req, res) => {

    const mentor_name = req.body.mentor_name;
    const address = req.body.address;
    const email = req.body.email;
    const job_status = req.body.job_status;
    const date_assigned = req.body.date_assigned;


    const newMentor = new Mentor({
        mentor_name,
        address,
        email,
        job_status,
        date_assigned,


    });

    newMentor.save().then(() => {
        req.json('Mentor added!')
    }).catch((err) => {
        console.log(err);

    });
});
router.route('/').get((req, res) => {
    Mentor.find().then((mentor) => {
        res.json(mentor)
    }).catch((err) => {
        console.log(err);
    });
});
// update deatails
router.route('/update/:id').post(async (req, res) => {
    let userid = req.params.id;
    const { mentor_name, address, email, job_status, date_assigned } = req.body;
    const updatementor = {
        mentor_name,
        address,
        email,
        job_status,
        date_assigned,
    }
    const update = await mentor.findByIdAndUpdate(userid, updateMentor).then(() => {
        res.status(200).send({ status: "Mentor updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
});


// delete details
router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id;
    await mentor.findByIdAndDelete(userid)
        .then(() => {
            res.status(200).send({ status: "ment deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting data", error: err.message });
        })

})

module.exports = router;