const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookieToResponse } = require("../utils");
const jwt = require("jsonwebtoken");  
const {createJWT} = require('../utils/jwt')

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ name, email, password, role });
  const tokenUser = {name: user.name, userId: user._id, role: user.role}
  attachCookieToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async(req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    throw new CustomError.BadRequestError('Please provide email and password')
  }

  const user = await User.findOne({email});
  if(!user){
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if(!isPasswordCorrect){
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  attachCookieToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user });
};

const logout = async(req, res) => {
  res.send("logout");
};

module.exports = { register, login, logout };
