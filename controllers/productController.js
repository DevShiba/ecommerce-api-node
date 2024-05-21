const Product = require('../models/product');
const {StatusCodes } = require('http-status-codes');
const CustomError = require('../errors')

const createProduct = async(req,res)=>{
    req.body.user = req.user.userId;
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({product})  
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({})
  res.status(StatusCodes.OK).json({products, count: products.length})
};

const getSingleProduct = async (req, res) => {
    const {id: productId} = req.params;
    const product = await Product.findOne({_id: productId});

    if(!product){
        throw new CustomError.NotFoundError(`No Product With Id: ${productId}`)
    }
  res.send("get single product");
};

const updateProduct = async (req, res) => {
  res.send("update product");
};

const deleteProduct = async (req, res) => {
  res.send("delete product");
};

const uploadImage = async (req, res) => {
  res.send("upload product");
};

module.exports ={
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage
}