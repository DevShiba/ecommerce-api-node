const createProduct = async(req,res)=>{
    res.send('create product')   
}

const getAllProducts = async (req, res) => {
  res.send("get all product");
};

const getSingleProduct = async (req, res) => {
  res.send("get single product");
};

const updateProduct = async (req, res) => {
  res.send("create product");
};

const deleteProduct = async (req, res) => {
  res.send("create product");
};

const uploadImage = async (req, res) => {
  res.send("create product");
};

module.exports ={
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage
}