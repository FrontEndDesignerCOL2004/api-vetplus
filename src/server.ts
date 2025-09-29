import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database";
import planesRoutes from "./routes/planes.routes";
// import mongoose from "mongoose";

dotenv.config();
const app = express();

// const MONGO_URI = process.env.MONGO_URI || "";

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/planes", planesRoutes);

//Conectar a DB y levantar servidor
connectDB();

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
