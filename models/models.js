const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    name: { type: DataTypes.STRING, defaultValue: "Аноним" },
  },
  {
    tableName: "users_s",
  }
);

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: { type: DataTypes.STRING, allowNull: false },
    type: {
      type: DataTypes.INTEGER,
    },
    size: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "products_s",
  }
);

const ProductType = sequelize.define(
  "product_type",
  {
    type_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "product_types_s",
  }
);

const Order = sequelize.define(
  "order",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER },
  },
  {
    tableName: "orders_s",
  }
);

const OrderProduct = sequelize.define(
  "order_product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productId: {
      type: DataTypes.INTEGER,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "order_product_s",
  }
);

module.exports = {
  User,
  Product,
  ProductType,
  Order,
  OrderProduct,
};
