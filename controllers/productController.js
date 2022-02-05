const pool = require('../db');

class ProductController {
    async create(req, res) {
        console.log("create product");
    }

    async getAllProducts(req, res) {
      console.log("products from productController");
      try {
        const products = await pool.query('SELECT * FROM products');
        res.json(products.rows);
      } catch (err) {
        console.error(err.message);
      }
    }
}

module.exports = new ProductController()