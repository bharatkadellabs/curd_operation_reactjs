const asyncHandler = require('express-async-handler')
const UserModel = require('../model/userModel')
// const generateToken = require('../utils/generateToken.js')

const registerUser =  async (req, res, next) => {
  const { userName, email, password } = req.body;
  console.log('hiii')
  const userExists = await UserModel.findOne({ email })  
  if (userExists) {
    res.status(404)
    throw new Error('User Already Exists.......')
  }
  let user;
  try{
    user = new UserModel({
      userName,
      email,
      password,
      
    });
    console.log(user);
    await user.save();
  }catch(err){
    console.log(err)
  }

  if (user) {
    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      isAdmin: user.isAdmin,     
      // token: generateToken(user._id),
    });
  } else {
    res.status(401)
    throw new Error('Error Occured!')
  }
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await UserModel.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      isAdmin: user.isAdmin,
      
      // token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Email Or Password!')
  }
})
exports.registerUser = registerUser
exports.loginUser = loginUser
