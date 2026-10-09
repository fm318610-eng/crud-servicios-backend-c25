import { Router } from "express";
import { crearServicio, listarServicios, prueba, servicioBuscado, borrarServicio, editarServicio } from "../controllers/servicios.controllers.js";

const router = Router();

//http://localhost:3000/api/servicios/test

router.route('/').post(crearServicio).get(listarServicios);
router.route('/:id').get(servicioBuscado).delete(borrarServicio).put(editarServicio)


export default router;