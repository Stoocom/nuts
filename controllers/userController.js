const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    'secret_private_key7567',
    { expiresIn: '24h' }
  )
}

class UserController {
  async signup(req, res, next) {
    console.log(req.body);
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.internal('Не введены почта или пароль'));
    }
    const candidate = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if (candidate.rows[0]) {
      return next(ApiError.internal('Пользователь с такой почтой уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    await pool.query(`INSERT INTO users (email, password) VALUES ($1,$2)`, [email, hashPassword]);
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    const token = generateJwt(user.rows[0].id, email, role ? role : "USER");

    return res.json({ token });

  };

  async login(req, res, next) {
    const { email, password, role } = req.body;
  
    console.log("login");
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if (!user.rows[0]) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    //res.status(200).json(user.rows[0]);
    let comparePassword = bcrypt.compareSync(password, user.rows[0].password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJwt(user.rows[0].id, user.rows[0].email, user.rows[0].role ? user.rows[0].role : "USER");
    return res.status(200).json({ token })
  };
}

module.exports = new UserController()