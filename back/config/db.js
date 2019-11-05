const S = require("sequelize");
const db = new S("postgres://localhost:5432/eclimax", { logging: false });
module.exports = db;
