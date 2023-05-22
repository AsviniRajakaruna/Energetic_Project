const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//add user
router.route('/add').post(async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const role = req.body.role;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({

        firstName,
        lastName,
        address,
        role,
        email,
        telephone,
        password: hashedPassword,
    });

    

    newUser.save().then(() => {
        res.json('User added!')
    }).catch((err) => {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });

});
//view user
router.route('/').get((req, res) => {
    User.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });
});

//update details
router.route('/update/:id').post(async (req, res) => {
    let userid = req.params.id.trim();
    const { firstName, lastName, address, role, email, telephone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const updateUser = {
        firstName,
        lastName,
        address,
        role,
        email,
        telephone,
        password: hashedPassword,

    }

    const validRoles = ['admin', 'user', 'mentor'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const update = await User.findByIdAndUpdate(userid, updateUser).then(() => {
        res.status(200).send({ status: "User updated" })
    }).catch((err) => {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        console.error(err);
        res.status(500).json({ message: 'Server Error' });

    })
});
//delete details
router.route("/delete/:id").delete(async (req, res) => {
    let userid = req.params.id.trim();
    await User.findByIdAndDelete(userid)
    .then(() => {
        res.status(200).send({ status: "User deleted" })
    })

    .catch((err) => {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        console.error(err);
        res.status(500).json({ message: 'Server Error' });

    })


})

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      return res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
