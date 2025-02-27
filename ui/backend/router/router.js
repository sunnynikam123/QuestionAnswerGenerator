const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');
const cors = require('cors')
const users = require('../schema/users')
const User = require('../schema/users')
const cookieParser = require("cookie-parser");
const usertest = require("../schema/usertest")
// router.use(cors({
//     origin: '*',
//     credentials: true,            
// }));
router.use(cookieParser());
router.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
router.options('*', cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
const authenticateUser = require('../middleware/auth');

router.post('/register', async (req, res) => {
    const { name, phone, email, password, cpassword } = req.body

    const exist = await users.findOne({ email: email })
    if (exist) {
        res.send("user already exist")
    }
    else {
        const userr = new users({ name, phone, email, password, cpassword })
        try {

            const save = await userr.save()
            if (save) {
                res.send("user registered sucessfully")
            } else {
                res.send("user registration failed")
            }
        } catch (error) {
            res.send(error)
        }
    }

})
router.post('/addusertest',authenticateUser, async (req, res) => {
    const { url,testname,testid } = req.body
    const saveusertest = new usertest({url,testid,testname,email:req.user.email})
    const savetest = await saveusertest.save()
    if(savetest){
        res.status(200).send('test added to user account')
    }
    else{
        res.status(200).send('test not added to user account')
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.send("User not found");
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
        return res.send("Invalid credentials");
    }
    const token = user.generateAuthToken();
    const decodetoken =  jwt.verify(token,process.env.JWT_SECRET_KEY)
    const userdetalis = await User.findOne({_id:decodetoken}) 
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    if(userdetalis){
        return res.status(200).send(userdetalis);
    } else{
        return res.status(200).send("Something went wrong");

    }
});
router.get('/profile', authenticateUser, (req, res) => {
    res.status(200).send(
        req.user,
    );
});
router.post('/logout', (req, res) => {
    res.clearCookie('jwt', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict'
    });
    return res.status(200).send("Logged out successfully");
});
router.post('/logout', (req, res) => {
    res.clearCookie('jwt');
    return res.status(200).send("Logged out successfully");
});

module.exports = router