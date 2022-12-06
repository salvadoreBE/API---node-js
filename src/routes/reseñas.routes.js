import {Router} from "express";
import {methods as reseñaController} from "./../controllers/reseña.controller";

const router=Router();

router.post("/", reseñaController.addReseña);
router.get("/:id", reseñaController.getReseña);
router.get("/", reseñaController.getReseñas);
router.put("/:id", reseñaController.updateReseña);
router.delete("/:id", reseñaController.deleteReseña);


export default router;