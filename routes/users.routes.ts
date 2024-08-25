import { Router } from "express";
import { userController } from "../core/data/controller/users.controller";
import { createUserValidation } from "../core/middleware/createUser.validation";
import { checkUserValidation } from "../core/middleware/checkUser.validation";
import { loginUserValidation } from "../core/middleware/loginUser.validation";

const router = Router();

router.get("/", userController.getAllHandler);
router.get("/:id", userController.getOneHandler);
router.post("/", createUserValidation, userController.createHandler);
router.post("/check", checkUserValidation, userController.checkUserHandler);
router.post("/login", loginUserValidation, userController.loginUserHandler);

// router.put("/:id");
// router.delete("/:id");
// router.post("/");

export default router;
