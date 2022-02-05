const pool = require('../db');

class TypeController {
    async create(req, res) {
        console.log("create");
    }

    async getAllTypes(req, res) {
      console.log("types from typeController");
      try {
        const types = await pool.query('SELECT * FROM types');
        res.json(types.rows);
      } catch (err) {
        console.error(err.message);
      }
    }
}

module.exports = new TypeController()