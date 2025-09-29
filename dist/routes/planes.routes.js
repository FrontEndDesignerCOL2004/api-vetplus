"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Plan from "../models/Plan";
const express_1 = require("express");
const planes_controller_1 = require("../controllers/planes.controller");
const router = (0, express_1.Router)();
// Base: /api/planes
router.get("/", planes_controller_1.obtenerPlanes); //Todos
router.get("/tipo/:tipo", planes_controller_1.obtenerPlanesPorTipo); //por tipo
router.post("/", planes_controller_1.crearPlan); //➕ crear nuevo
router.get("/:id", planes_controller_1.obtenerPlanPorId); //por id
router.put("/:id", planes_controller_1.actualizarPlan); //por id
router.delete("/:id", planes_controller_1.eliminarPlan); //por id
exports.default = router;
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
