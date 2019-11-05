const S = require("sequelize");
const db = new S("postgres://localhost:5432/OMDB", { logging: false });
module.exports = db;
