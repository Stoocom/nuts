const sequelize = require("../db");
const { ProductType } = require("../models/models");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const newType = await ProductType.create({ name });
    return res.json(newType);
  }

  async getAllTypes(req, res) {
    console.log("getAllTypes");
    try {
      const types = await ProductType.findAll();
      return res.json(types);
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = new TypeController();
