// import Plan from "../models/Plan";
import { Router } from "express";

import {
  obtenerPlanes,
  obtenerPlanPorId,
  obtenerPlanesPorTipo,
  crearPlan,
  actualizarPlan,
  eliminarPlan,
} from "../controllers/planes.controller";

const router = Router();

// Base: /api/planes
router.get("/", obtenerPlanes); //Todos
router.get("/tipo/:tipo", obtenerPlanesPorTipo); //por tipo
router.post("/", crearPlan); //➕ crear nuevo
router.get("/:id", obtenerPlanPorId); //por id
router.put("/:id", actualizarPlan); //por id
router.delete("/:id", eliminarPlan); //por id

export default router;

//Base: api:planes

/* // ✅ Obtener todos los planes
router.get("/", async (req, res) => {
  try {
    const planes = await Plan.find();
    res.json(planes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener planes" });
  }
});

// ✅ Obtener planes por tipo (dog o cat)
router.get("/tipo/:tipo", async (req, res) => {
  try {
    const { tipo } = req.params;
    const planes = await Plan.find({ type: tipo });
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener planes por tipo" });
  }
});

// ✅ Obtener un plan por ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findById(id);
    if (!plan) return res.status(404).json({ error: "Plan no encontrado" });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener el plan por ID" });
  }
});

export default router; */
