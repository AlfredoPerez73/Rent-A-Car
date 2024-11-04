import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { DetalleFactura } from "./detalleFactura.js";

export const Vehiculo = sequelize.define(
    "vehiculos",
    {
        idVehiculo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        marca: {
            type: DataTypes.STRING,
        },
        modelo: {
            type: DataTypes.STRING,
        },
        año: {
            type: DataTypes.INTEGER,
        },
        matricula: {
            type: DataTypes.STRING,
        },
        idCategoria: {
            type: DataTypes.INTEGER,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
);

Vehiculo.hasMany(DetalleFactura, {
    foreignKey: "idVehiculo",
    sourceKey: "idVehiculo",
});

DetalleFactura.belongsTo(Vehiculo, {
    foreignKey: "idVehiculo",
    targetKey: "idVehiculo",
});