const S = require("sequelize");
const db = require("../config/db");
const Categorie = require("./categories");
const Review = require("./reviews");

class Product extends S.Model {}

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
      type: S.TEXT
    },
    ratingCount: {
      type: S.INTEGER,
      defaultValue: null
    },
    ratingValue: {
      type: S.INTEGER,
      defaultValue: null
    },
    display: {
      type: S.BOOLEAN,
      defaultValue: true
    }
  },
  { sequelize: db, modelName: "product" }
);

Product.belongsToMany(Categorie, { through: "categorie_product" });
Product.hasMany(Review);
module.exports = Product;
