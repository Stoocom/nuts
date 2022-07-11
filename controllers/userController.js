//const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const fetch = require('node-fetch');
const sequelize = require("../db");
const { User } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    'secret_private_key7567',
    { expiresIn: '24h' }
  )
}

const generate_password = (len) => {
  let password = "";
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  for (var i = 0; i < len; i++){
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return password;
}

class UserController {
  async sendCodeBySMS(req, res, next) {
    console.log("UserController signup");
    console.log(req.body);
    const { phone, email } = req.body;
    if (!phone) {
      return next(ApiError.internal('Не введен телефон'));
    }
    const candidate = await User.findOne({
      where: { email: phone },
    });
    console.log(candidate);
    if (candidate) {
       return next(ApiError.internal('Пользователь с такой почтой уже существует'));
    } else {
      const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      const newPassword = generate_password(6) + code;
      const authApi = 'https://eliseevan1986@mail.ru:c2IO2Le8dKblaTmlI6sqm32SKkB@gate.smsaero.ru/v2/auth'
      //const urlSMSAero = `https://${process.env.SMS_AERO_MAIL}:${process.env.SMS_AERO_KEY}@gate.smsaero.ru/v2/sms/send?numbers[]=${phone}&text=Code+Verificate:+${code}+Password:+${newPassword}&sign=SMS Aero`
      const response = await fetch(authApi);
      const data = await response.json();
      console.log(data);
      if (data.success) {
        return res.status(200).json({ code, newPassword })
      } else {
        return next(ApiError.internal('Код не был отправлен, попробуйте еще раз'));
      }
    }

    //const authApi = 'https://eliseevan1986@mail.ru:c2IO2Le8dKblaTmlI6sqm32SKkB@gate.smsaero.ru/v2/auth'
    //const urlSMSAero = `https://eliseevan1986@mail.ru:c2IO2Le8dKblaTmlI6sqm32SKkB@gate.smsaero.ru/v2/sms/send?numbers[]=79129185942&text=Code+Verificate:+7777&sign=SMS Aero`
    //const urlApi = `http://${name}:${key}@gate.smsaero.ru/v2/sms/send?number=${phone}&text=Code+Verificate:+${code}&sign=SMS Aero`;
    //console.log(authApi);
    //try {
    //const response = await fetch(urlSMSAero)

    //const data = await response.json();

    //let result = await response.json();
    //console.log(data);
    //res.status(200).send(error)
    //return res.json(result);

    //} catch (error) {
      // res.status(500).send(error)
    //}
    // const candidate = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    // if (candidate.rows[0]) {
    //   return next(ApiError.internal('Пользователь с такой почтой уже существует'));
    // }
    // const hashPassword = await bcrypt.hash(password, 5);
    // await pool.query(`INSERT INTO users (email, password) VALUES ($1,$2)`, [email, hashPassword]);
    // const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    // const token = generateJwt(user.rows[0].id, email, role ? role : "USER");
    // return res.json("Готово");
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