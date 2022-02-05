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
    //next('route');
    //next({ error: "Не введены почта или пароль" });
    console.log("registration");
    console.log(req.body);
    const { email, password, role } = req.body;
    if (!email || !password) {
      console.log("Не введены почта или пароль");
      return res.status(404).json({ message: "Не введены почта или пароль" });
    }
    const candidate = await pool.query(`SELECT * 1FROM users WHERE email=$1`, [email])
    //console.log(candidate.rows);
    if (candidate.rows[0]) {
      return res.status(403).json({ message: "Пользователь с таким именем уже существует" });
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
      console.log("User not found");
      return next(ApiError.internal('Пользователь не найден'));
    }
    //res.status(200).json(user.rows[0]);
    let comparePassword = bcrypt.compareSync(password, user.rows[0].password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль не найден'));
    }
    const token = generateJwt(user.rows[0].id, user.rows[0].email, user.rows[0].role ? user.rows[0].role : "USER");
    return res.status(200).json({ token })


    // } catch(err) {
    //   console.log("error");
    //   if (!err.statusCode) {
    //     err.statusCode = 500;
    //     err.message = "Не указан email";
    //   }
    //   console.log(err.message);
    //   return next(new Error(err.message));

    // }
    // const { email, password } = req.body;
    // const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    // console.log(user.rows[0]);
    // if (!user.rows[0]) {
    //   return res.status(403).json({ message: "Пользователь не найден" });
    // }
    // let comparePassword = bcrypt.compareSync(password, user.rows[0].password);
    // if (!comparePassword) {
    //   return res.status(403).json({ error: 'Указан неверный пароль' });
    // }
    // const token = generateJwt(user.rows[0].id, user.rows[0].email, user.rows[0].role)
    // return res.json({ token })

    //return res.status(300).json(err.message);

  };
}

module.exports = new UserController()