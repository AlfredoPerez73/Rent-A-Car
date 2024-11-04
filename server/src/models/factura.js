import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { DetalleFactura } from "./detalleFactura.js";

export const Factura = sequelize.define(
    "facturas",
    {
        idFactura: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaFactura: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        total: {
            type: DataTypes.DECIMAL,
        },
        idCliente: {
            type: DataTypes.INTEGER,
        },
        idUsuario: {
            type: DataTypes.INTEGER,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
);

Factura.hasMany(DetalleFactura, {
    foreignKey: "idFactura",
    sourceKey: "idFactura",
});

DetalleFactura.belongsTo(Factura, {
    foreignKey: "idFactura",
    targetKey: "idFactura",
});