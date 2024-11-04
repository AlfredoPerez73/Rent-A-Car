import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Factura } from "./factura.js";

export const Cliente = sequelize.define(
    "clientes",
    {
        idCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        documento: {
            type: DataTypes.STRING,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        correo: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
);


Cliente.hasMany(Factura, {
    foreignKey: "idCliente",
    sourceKey: "idCliente",
});

Factura.belongsTo(Cliente, {
    foreignKey: "idCliente",
    targetKey: "idCliente",
});