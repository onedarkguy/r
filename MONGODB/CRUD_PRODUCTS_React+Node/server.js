const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/product_catalog')
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: [0.01, 'Price must be greater than zero'] },
    stock: { type: Number, required: true, min: [0, 'Stock cannot be negative'] },
    category: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema, 'products');

app.post('/add-product', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ error: "Product name must be unique" });
        res.status(400).json({ error: "Bad Request: Invalid input data", details: error.message });
    }
});

app.get('/products', async (req, res) => {
    try {
        let query = {};
        if (req.query.category) query.category = req.query.category;
        
        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/search', async (req, res) => {
    try {
        const { name, minPrice, maxPrice } = req.query;
        let query = {};
        
        if (name) query.name = { $regex: name, $options: 'i' };
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Not Found: Product ID not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: "Bad Request: Invalid ID format" });
    }
});

app.put('/update-product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ error: "Not Found: Product ID not found" });
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(400).json({ error: "Bad Request: Invalid input data", details: error.message });
    }
});

app.delete('/delete-product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: "Not Found: Product ID not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log("Backend server running on port 3000"));
