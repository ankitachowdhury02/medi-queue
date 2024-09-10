import express from 'express';
import { loginController, registerController, updateUserController } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// router
const router = express.Router();

// routes
router.post('/register', registerController);
router.post('/login', loginController);
router.patch('/update-account', authMiddleware, updateUserController);

export default router;