const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");

router.post("/", productController.create);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);
router.get("/typed/:id", productController.getProductbyTypeId);

module.exports = router;
