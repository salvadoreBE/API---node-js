import {Router} from "express";
import {methods as libroController} from "./../controllers/libros.controller";

const router=Router();

router.post("/", libroController.addLibro);
router.get("/:titulo", libroController.getLibro);
router.get("/", libroController.getLibros);
router.put("/:titulo1", libroController.updateLibro);
router.delete("/:titulo", libroController.deleteLibro);


export default router;