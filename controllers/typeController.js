const sequelize = require("../db");
const { ProductType } = require("../models/models");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const newType = await ProductType.create({ name });
    return res.json(newType);
  }

  async getAllTypes(req, res) {
    try {
      const types = await ProductType.findAll();
      return res.json(types);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getOneType(req, res) {
    try {
      const searchId = req.params.id;
      const oneType = await ProductType.findOne({ where: { id: searchId } });
      return res.json(oneType);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = new TypeController();
