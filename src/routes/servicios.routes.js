import { Router } from "express";
import {
  crearServicio,
  listarServicios,
  servicioBuscado,
  borrarServicio,
  editarServicio,
} from "../controllers/servicios.controllers.js";
import reglasServicio from "../middlewares/validarServicio.js";


const router = Router();

//http://localhost:3000/api/servicios/test

router.route("/").post(reglasServicio, crearServicio).get(listarServicios);
router
  .route("/:id")
  .get(servicioBuscado)
  .delete(borrarServicio)
  .put(reglasServicio, editarServicio);

export default router;
