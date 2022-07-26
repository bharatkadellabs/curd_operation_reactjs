const Product =require("../model/productModel");

const getAllProduct =async (req, res, next) => {
    console.log('getAll');
    let product;
    try{
        product = await Product.find();

    }catch(err) {
         console.log(err);
    }
    
    if(!product){
        return res.status(404).json({message:"no product found"});

    }
    return res.status(200).json({product});
};

const addProduct = async (req, res ,next) => {
    const {title,subTitle,price,mrpPrice} = req.body;
    let product ;
    try{
        product = new Product({
           title,
           subTitle,
           price,
           mrpPrice

        });
        await product.save();
    }catch(err){
        console.log(err);

    }
    if(!product){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({product});
};

const getById = async (req , res , next) =>{
    
    const id= req.params.id;
    let product;
    try{
        console.log(id);
        product =await Product.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(404).json({message:'No Product Id Found'})
    }
    return res.status(200).json({product});
};
const updateProduct = async (req, res,next)=>{
    const id= req.params.id;
    const {title,subTitle,price,mrpPrice} = req.body;
    let product;
    try{
        product = await Product.findByIdAndUpdate(id, {
            title,subTitle,price,mrpPrice
        })
        product =await product.save()
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(400).json({message:'unable to Update by this id'})
    }
    return res.status(200).json({product});
};
const deleteProduct =async (req, res, next) => {
    const id = req.params.deleteId;
    console.log(id);
    let product;
    try {
      product = await Product.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!product) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };


exports.getAllProduct=getAllProduct;
exports.addProduct= addProduct;
exports.getById = getById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;

