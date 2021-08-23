const result = require("dotenv").config({ path: "./.env.local" });

if (result.error) {
  throw result.error;
}

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT } =
  result.parsed;

export default {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: DB_DIALECT,
};
