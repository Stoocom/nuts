const { Product } = require("../models/models");

class ProductController {
  async create(req, res) {
    const { name, typeId, size, price } = req.body;
    const newProduct = await Product.create({ name, typeId, size, price });
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
      const searchId = req.params.id;
      const oneProduct = await Product.findOne({ where: { id: searchId } });
      return res.json(oneProduct);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getProductbyTypeId(req, res) {
    try {
      const searchId = req.params.id;
      const ProductsByType = await Product.findAll({
        where: { typeId: searchId },
      });
      return res.json(ProductsByType);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = new ProductController();
