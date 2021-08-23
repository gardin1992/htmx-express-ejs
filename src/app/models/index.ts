import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import { config } from "../../data/config/database";

const db: any = {};

const sequelize: any = new Sequelize(
  `mysql://${config.username}:${config.password}@${config.host}:3306/${config.database}`
);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
