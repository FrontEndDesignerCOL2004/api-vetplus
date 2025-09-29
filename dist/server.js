"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
const planes_routes_1 = __importDefault(require("./routes/planes.routes"));
// import mongoose from "mongoose";
dotenv_1.default.config();
const app = (0, express_1.default)();
// const MONGO_URI = process.env.MONGO_URI || "";
// Middlewares
app.use(express_1.default.json());
// Rutas
app.use("/api/planes", planes_routes_1.default);
//Conectar a DB y levantar servidor
(0, database_1.connectDB)();
/* // Conectar a MongoDB y levantar servidor
mongoose
  .connect(MONGO_URI)
  .then(() => {
  console.log("✅ Mongo conectado");
    })
    .catch((err) => {
  console.error("❌ Error al conectar a MongoDB", err);
}); */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
