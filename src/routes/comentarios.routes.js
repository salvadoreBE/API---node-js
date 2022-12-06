import {Router} from "express";
import {methods as comentarioController} from "./../controllers/comentarios.controller";

const router=Router();

router.post("/", comentarioController.addComentario);
router.get("/:usuario", comentarioController.getComentario);
router.get("/", comentarioController.getComentarios);
router.put("/:usuario1", comentarioController.updateComentario);
router.delete("/:usuario", comentarioController.deleteComentario);


export default router;