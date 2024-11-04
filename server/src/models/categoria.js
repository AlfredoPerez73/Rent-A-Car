import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Vehiculo } from "./vehiculo.js";

export const Categoria = sequelize.define(
    "categorias",
    {
        idCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
);

Categoria.hasMany(Vehiculo, {
    foreignKey: "idCategoria",
    sourceKey: "idCategoria",
});

Vehiculo.belongsTo(Categoria, {
    foreignKey: "idCategoria",
    targetKey: "idCategoria",
});