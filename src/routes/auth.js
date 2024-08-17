import express from "express";

import { validateBody } from "../middlewares/validateBody.js";
import { registerSchema, loginSchema} from "../validation/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerController, loginController,logoutController } from "../controllers/auth.js";


const router = express.Router();
const jsonParser = express.json();

router.post(
    '/register',
    jsonParser,
    validateBody(registerSchema),
    ctrlWrapper(registerController),
);


router.post(
    '/login',
    jsonParser,
    validateBody(loginSchema),
    ctrlWrapper(loginController),
);

router.post('/logout', ctrlWrapper(logoutController));

export default router;
