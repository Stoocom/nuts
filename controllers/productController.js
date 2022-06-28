const { Product } = require("../models/models");

class ProductController {
  async create(req, res) {
    const { product_name, type, size, price } = req.body;
    const newProduct = await Product.create({
      product_name,
      type,
      size,
      price,
    });
    return res.json(newProduct);
  }

  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getOneProduct(req, res) {
    try {
      const searchId = req.params.product_id;
      const oneProduct = await Product.findOne({
        where: { product_id: searchId },
      });
      return res.json(oneProduct);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getProductbyTypeId(req, res) {
    try {
      const searchId = req.params.product_id;
      const ProductsByType = await Product.findAll({
        where: { type: searchId },
      });
      return res.json(ProductsByType);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = new ProductController();
