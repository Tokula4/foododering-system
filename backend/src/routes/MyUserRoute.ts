import express from "express"
import MyUserControllers from "../controllers/MyUserControllers";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();
router.get("/", jwtCheck, jwtparse, MyUserControllers.getCurrentUser)
router.post("/", jwtCheck, MyUserControllers.createCurrentUser);
router.put("/", jwtCheck , jwtparse, validateMyUserRequest, MyUserControllers.updateCurrentUser)

 
export default router ;   