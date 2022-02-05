const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const productRouter = require('./productRouter');

router.use('/types', typeRouter);
router.use('/products', productRouter);
router.use('/users', userRouter);

module.exports = router