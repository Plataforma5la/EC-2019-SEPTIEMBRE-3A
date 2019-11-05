const S = require("sequelize");
const db = require("../config/db");

class Categorie extends S.Model {}

Categorie.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "categorie" }
);
