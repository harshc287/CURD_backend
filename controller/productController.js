const Product = require("../models/productModel")

exports.createProduct = async(req, res) => {
    try {
        const { name, price, description, category} = req.body;

        if(!name || !price || !description || !category){
            return res.status(400).json({message: "please Fill All Fields"})
        }   

        const product = await Product.create({name, price, description, category})

        res.status(201).json({message: "Product crreated successfully", product})
        
    } catch (error) {
        res.status(500).json({message: "server error", error:error.message})
    }
}

exports.getProducts = async (req, res) => {
    try {

        const products = await Product.find()

        res.status(200).json({message: "All Products", products})


        
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message})
    }
}

exports.getProductById = async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id)

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product found", product})

    } catch (error) {
        res.status(500).json({message: "server error", error: error.message})
    }
}

exports.updateProduct = async (req, res) => {
    try{

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!product){
            return res.status(404).json({message: "Product not found"})

        }

        res.status(200).json({message: "product updated successfully", product})

    }catch (error) {
        res.status(500).json({message: "server error"  , error: error.message  })
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id)

        if(!product){
            return res.status(404).json({message: "Product not found"})

        }
        res.status(200).json({message: "product deleted successfully", product})
    }
    catch (error) {
        res.status(500).json({message: "server error", error: error.message})
    }
}