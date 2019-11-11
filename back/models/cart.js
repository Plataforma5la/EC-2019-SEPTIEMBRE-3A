const S = require("sequelize");
const db = require("../config/db");

const Product = require("./products");
const User = require("./user");
const Cart_product = require("./cart_product");

class Cart extends S.Model {}

Cart.init(
  {
    status: {
      type: S.STRING,
      defaultValue: "open"
    },
    preciototalalcomprar: {
      type: S.INTEGER,
      defaultValue: 0
    }
  },
  { sequelize: db, modelName: "cart" }
);

Cart.belongsTo(User, { as: "buyer" });
Cart.belongsToMany(Product, { through: Cart_product });

module.exports = Cart;
