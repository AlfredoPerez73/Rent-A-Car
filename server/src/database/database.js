import Sequelize from "sequelize";


export const sequelize = new Sequelize(
  "rentacar",
  "postgres",
  "123",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
