import {Router} from "express";
import {methods as usuarioController} from "./../controllers/usuario.controller";

const router=Router();

router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUsuario);
router.post("/", usuarioController.addUsuario);
router.delete("/:id", usuarioController.deleteUsuario);
router.put("/:id", usuarioController.updateUsuario);


export default router;