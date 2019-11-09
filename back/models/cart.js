const S = require("sequelize");
const db = require("../config/db");

const Product = require("./products");
const User = require("./user");

class Cart extends S.Model {}

Cart.init(
  {
    status: {
      type: S.STRING,
      defaultValue: 'open'
    },
    preciototalalcomprar: {
        type: S.INTEGER,
        defaultValue: 0
      }
  },
  { sequelize: db, modelName: "cart" }
);

Cart.belongsTo(User, {as:'buyer'})
Cart.belongsToMany(Product, { through: "cart_product" });

module.exports = Cart;