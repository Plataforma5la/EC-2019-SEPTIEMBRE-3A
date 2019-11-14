const Product = require("./products");
const Category = require("./categories");

// N:M middle table [PRODUCTS, CATEGORIES]
Category.belongsToMany(Product, { through: "categorie_product" });
Product.belongsToMany(Category, { through: "categorie_product" });

module.exports = {
  Product,
  Category
};
