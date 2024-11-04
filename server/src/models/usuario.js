import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Factura } from "./factura.js";

export const Usuario = sequelize.define(
    "usuarios",
    {
        idUsuario: {
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
        correo: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
);

Usuario.hasMany(Factura, {
    foreignKey: "idUsuario",
    sourceKey: "idUsuario",
});

Factura.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    targetKey: "idUsuario",
});