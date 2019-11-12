const S = require("sequelize");
const db = require("../config/db");

class Cart_product extends S.Model {}

Cart_product.init(
  {
    count: {
      type: S.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db, modelName: "cart_product" }
);

Cart_product.prototype.addCount = function() {
  this.update({
    count: this.count + 1
  }).then(() => {});
};

Cart_product.prototype.subtractCount = function() {
  this.update({
    count: this.count - 1
  }).then(() => {});
};

module.exports = Cart_product;
