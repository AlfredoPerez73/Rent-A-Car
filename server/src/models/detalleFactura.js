import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const DetalleFactura = sequelize.define(
    "detallesFactura",
    {
      idDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idFactura: {
        type: DataTypes.INTEGER,
      },
      idVehiculo: {
        type: DataTypes.INTEGER,
      },
      fechaAlquiler: {
        type: DataTypes.DATE,
      },
      precioUnitario: {
        type: DataTypes.DECIMAL,
      },
      subtotal: {
        type: DataTypes.DECIMAL,
      },
      fechaRegistro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
  );
  