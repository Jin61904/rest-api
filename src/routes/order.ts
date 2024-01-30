import { Router } from "express";
import { getitems } from "../controllers/order";
import { checkJwt } from "../middlewares/session";
/*
* Esta ruta solo pueden acceder las personas que tienen una session activa!
* Que tenga un JWT activo
*/
const router = Router();
router.get("/", checkJwt, getitems)

export { router };