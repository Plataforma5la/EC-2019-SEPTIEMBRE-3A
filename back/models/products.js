const S = require("sequelize");
const db = require("../config/db");
const Categorie = require("./categories");

class Product extends S.Model { }

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false
    },
    price: {
      type: S.INTEGER,
      allowNull: false
    },
    stock: {
      type: S.INTEGER,
      allowNull: false
    },
    img1Url: {
      type: S.TEXT,
      allowNull: false
    },
    img2Url: {
      type: S.TEXT,
      allowNull: false
    },
    ratingCount: {
      type: S.INTEGER,
      defaultValue: null
    },
    ratingValue: {
      type: S.INTEGER,
      defaultValue: null
    }
  },
  { sequelize: db, modelName: "product" }
);

// Product.hasMany(Categorie, { as: "categories" });
Product.belongsToMany(Categorie, { through: "categorie_product" });

module.exports = Product;
