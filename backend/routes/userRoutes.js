import express from 'express';
import { loginController, registerController, updateUserController } from '../controllers/userController.js';
import { userAuthMiddleware } from "../middlewares/userAuthMiddleware.js"

// router
const router = express.Router();

// routes
router.post('/register', registerController);
router.post('/login', loginController);
router.patch('/update-account', userAuthMiddleware, updateUserController);

export default router;