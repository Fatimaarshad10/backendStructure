"use-strict";
const env = process.env;
module.exports = {
  development: {
    username:  "user",
    password:  "",
    database: "",
    host:  "",
    port: 5432,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
};
