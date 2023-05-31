const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const createUser = asyncHandler(async(req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email: email});

    if(!findUser){
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else{
        //user is already existing

        throw new Error(`User Already Exists`);

        // res.json({
        //     msg: 'User already exists',
        //     success: false,
        // })
    }
})

//login a user
const loginUserCtrl = asyncHandler(async(req, res) => {
     const {email,password} = req.body;

     //check if user exists or not
     const findUser = await User.findOne({ email })
     if(findUser && await findUser.isPasswordMatched(password)){
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)

        })
     }
     else{
        throw new Error('Invalid Credentials')
     }
})

//get al users
const getAllUser = asyncHandler(async(req,res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (error) {
        throw  new Error(error)
    }
})

//get a single user
const getUser = asyncHandler(async(req,res) => {
     const {id} = req.params;
     try {
        const getaUser = await User.findById(id);
        res.json({getaUser})
     } catch (error) {
        throw new Error(error)
     }
})


module.exports = {createUser,loginUserCtrl, getAllUser,getUser}