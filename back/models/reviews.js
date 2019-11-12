const S = require("sequelize");
const db = require("../config/db");
class Review extends S.Model {}

Review.init(
  {
    score: {
      type: S.INTEGER,
      allowNull: false
    },
    content: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;